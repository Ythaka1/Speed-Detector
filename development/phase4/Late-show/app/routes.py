from flask import jsonify, request
from .models import db, Episode, Guest, Appearance

def init_routes(app):
    @app.route('/episodes', methods=['GET'])
    def get_episodes():
        episodes = Episode.query.all()
        return jsonify([{
            'id': ep.id,
            'date': ep.date,
            'number': ep.number
        } for ep in episodes])

    @app.route('/episodes/<int:id>', methods=['GET'])
    def get_episode(id):
        episode = Episode.query.get(id)
        if not episode:
            return jsonify({'error': 'Episode not found'}), 404
        
        return jsonify(episode.to_dict())

    @app.route('/guests', methods=['GET'])
    def get_guests():
        guests = Guest.query.all()
        return jsonify([guest.to_dict() for guest in guests])

    @app.route('/appearances', methods=['POST'])
    def create_appearance():
        data = request.get_json()
        
        try:
            appearance = Appearance(
                rating=data['rating'],
                episode_id=data['episode_id'],
                guest_id=data['guest_id']
            )
            db.session.add(appearance)
            db.session.commit()
            
            return jsonify(appearance.to_dict()), 201
        
        except Exception as e:
            db.session.rollback()
            return jsonify({'errors': [str(e)]}), 400