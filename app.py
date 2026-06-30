from flask import Flask, render_template

# Disable Flask's default static route because this app only needs the root page.
app = Flask(__name__, static_folder=None)


@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
