from flask import Flask, jsonify, request, session, render_template, url_for, redirect
import requests, json
import flask, sys, os

app = Flask(__name__)
app.secret_key = 'celeron0912'
# app.config['SESSION_TYPE'] = 'filesystem'

@app.route('/administrator')
def admin_dash():
    return render_template("homepage_admin.html")

@app.route('/dashboard')
def consumer_dash():
    return render_template("homepage_consumer.html")

@app.route('/addbill')
def admin_addbill():
    return render_template("homepage_consumer.html")

@app.route('/login', methods=['POST'])
def login():
    params = request.get_json()
    username = params["username"]
    password = params["password"]
    headers = {'content-type': 'application/json; charset=utf-8', 'dataType': "json"}
    resp = requests.post("http://localhost:8080/login", headers=headers, json={'username': username, 'password': password})
    data = resp.json()
    if "error" in data['status']:
        return jsonify(resp.json())
    else:
        session['user'] = data['status']
        return jsonify(resp.json())

@app.route('/register', methods=['POST'])
def register():
    params = request.get_json()
    firstname = params["firstname"]
    lastname = params["lastname"]
    rusername = params["rusername"]
    password = params["password"]
    address = params["address"]
    reg_key = params["regkey"]
    mobile = params["mobile"]

    headers = {'content-type': 'application/json; charset=utf-8', 'dataType': "json"}
    resp = requests.post("http://localhost:8080/register", headers=headers, json={'firstname': firstname, 'lastname': lastname,
                                                                               'username': rusername, 'password': password,
                                                                               'address': address, 'reg_key': reg_key,
                                                                               'number': mobile})
    data = resp.json()
    if "error" in data['status']:
        return jsonify(resp.json())
    else:
        session['user'] = data['user']
        return jsonify(resp.json())

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