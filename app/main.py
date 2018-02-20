from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def scanRadar():
   
    app.config.from_envvar('SCAN_RADAR_CONFIG')
    GOOGLE_API_KEY = app.config['SECRET_KEY']
   
    return( render_template('scan_radar_dual.html', GOOGLE_API_KEY=GOOGLE_API_KEY)) 


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=80)
