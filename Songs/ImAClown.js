setCps(174/60/4)
samples('http://localhost:5432/strudel.json')
/*
$: s("white:11*4").clip(0.1).lpf(1000).almostNever(x=>x.ply(2))

$: note("<[0, 3, 4] 7>").scale("C").struct("[1 0 [0 1] 0 0 [0 1] [0 1] 0]/2")
*/
/*
$: note("<[0, 3, 4] 7>").chord("Cm").s("piano").struct("[1 0 [0 1] 0 0 [0 1] [0 1] 0]/2")


*/

//

const synth   = n("[0 5 6 4]/4").scale("C:minor").s("gm_pad_sweep").speed(saw.range(0, 1).slow(4))
const hh      = s("hh:1*8")
const melody  = n("[0,3,4] 2 4 <7*7 [~ 7]>").scale("C:minor").s("gm_music_box").clip(rand.mul(1.2)).rib(0, 8)
const db      = s("laugh1").scrub("0.5").struct("0 1 0 1").clip(0.35)
const driver  = s("hh:1").struct("[1 1] [0 1] [1 1] [0 1]").xfade(rand.fast(10).range(0, 1)).hpf(perlin.fast(10).range(0, 10000))
const triples = s("laugh2").speed(1.05).gain(2).room(1.2)
const bd      = s("bd*4")

const experience = s("sound_experience").scrub(0.82).clip(1)
const sound      = s("sound_experience").scrub(0.705).clip(0.6).loopAt(4).note("<[C2,E2] D2>/4")
const intro      = s("sound_experience").struct("<1 0@1000>")

//$: s("~")
//$: //


$: stack(
    intro,
    synth,
    hh,
    melody,
    db,
    driver,
    sound,
    triples,
    bd
)