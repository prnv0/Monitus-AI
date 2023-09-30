from flask import Flask, request, jsonify
from flask_cors import CORS
from speech import listen_voice
import fitz 
import os
import openai
openai.api_type = "azure"
openai.api_base = 'https://ust-d3-2023-codered.openai.azure.com/'
openai.api_version = "2023-07-01-preview"
openai.api_key = "0ec934c3a21249b48a23276a4c9b3c4c"

app = Flask(__name__)
# Configure CORS to allow requests from your React app's origin
CORS(app)


@app.route('/concatenate', methods=['POST'])
def concatenate_strings():
    data = request.get_json()
    name = data.get('string1', '')
    prescription = data.get('string2', '')
    doc = fitz.open("C:\\Users\\Pranav Satish\\Desktop\\Pranav\\Repository\\React\\D3Code\\Monitus\\server\\Records\\"+name+".pdf")
    print(doc)
    try:
        all_text = ""
        doc = fitz.open("C:\\Users\\Pranav Satish\\Desktop\\Pranav\\Repository\\React\\D3Code\\Monitus\\server\\Records\\"+name+".pdf")#C:\Users\262012\Desktop\adrserver-main\Records\JasonMamoa.pdf
        for page in doc:
            all_text += page.get_text() + chr(12)
        response = openai.ChatCompletion.create(
            engine="UST-D3-2023-codered",
            messages = [{"role": "system", "content" : "You are ChatGPT, a large language model that is trained to accept a patient's health record and return a summary specific details about this person in the format: age,gender,known medical conditions,allergies,current mediations. list it all out in 1 sentence comma seperated\nKnowledge cutoff: 2021-09-01\nCurrent date: 2023-03-02"},{"role": "user", "content" : all_text}],
            temperature=0.7,
            max_tokens=800,
            top_p=0.95,
            frequency_penalty=0,
            presence_penalty=0,
            stop=None)
        print(response['choices'][0]['message']['content'])
        prompt=response['choices'][0]['message']['content']
    except:
        prompt="Invalid User"
    return jsonify({'result': prompt})


@app.route('/voice', methods=['POST'])
def handle_voice():
    prescription = listen_voice()
    return {"Prescription" : prescription}

    

if __name__ == '__main__':
    app.run(debug=True)
