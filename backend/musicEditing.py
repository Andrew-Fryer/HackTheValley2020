from pydub import AudioSegment

chill = AudioSegment.from_file("../hackthevalley2020/backend/musicSamples/Foo1.wav", format = "wav")
chill2 = AudioSegment.from_file("../hackthevalley2020/backend/musicSamples/Foo2.wav", format = "wav")

beginning = chill
end = chill2

crossfade = (beginning.append(end, crossfade = 2000)).fade_in(2000).fade_out(3000)

