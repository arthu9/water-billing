from flask import Flask, jsonify, request, session, render_template, url_for, redirect
import requests, json
import flask, sys, os

app = Flask(__name__)
app.secret_key = 'celeron0912'
# app.config['SESSION_TYPE'] = 'filesystem'

@app.route('/')
def index():
    return render_template("homepage_admin.html")

@app.after_request
def add_cors(resp):
    resp.headers['Access-Control-Allow-Origin'] = flask.request.headers.get(
        'Origin', '*')
    resp.headers['Access-Control-Allow-Credentials'] = True
    resp.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS, GET, PUT, DELETE'
    resp.headers['Access-Control-Allow-Headers'] = flask.request.headers.get('Access-Control-Request-Headers',
                                                                             'Authorization')

    # set low for debugging

    if app.debug:
        resp.headers["Access-Control-Max-Age"] = '1'
    return resp


if __name__ == '__main__':
    app.run(debug=True)