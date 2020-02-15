from pydub import AudioSegment
from pydub.playback import play

# call music
chill = AudioSegment.from_file("../hackthevalley2020/backend/musicSamples/Foo1.wav", format = "wav")
chill2 = AudioSegment.from_file("../hackthevalley2020/backend/musicSamples/Foo2.wav", format = "wav")
speech = AudioSegment.from_file("../hackthevalley2020/backend/musicSamples/Cla1.wav", format = "wav")

beginning = chill
end = chill2

#perform crossfade of the 2 songs
crossfade = (beginning.append(end, crossfade = 2000)).fade_in(2000).fade_out(2000)

crossfade.export("cross.wav", format="wav")
crossfade = crossfade - 3 # reduce volume of music by 3dB

# overlay speech and the music
overlay = speech.overlay(crossfade)

# play merged audio file
play(overlay)
