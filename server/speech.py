import speech_recognition as  sr

def listen_voice():
  r = sr.Recognizer()

  with sr.Microphone() as source:
    r.adjust_for_ambient_noise(source)
    print("Speak Anything")
    audio = r.listen(source)

    try:
      text = r.recognize_google(audio)
      print("You said: {}".format(text))
      return text
    except:
      print("Sorry could not recognize your voice")
      return "Sorry could not recognize your voice"
