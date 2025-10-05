setCps(109/60/4)
samples('http://localhost:5432/strudel.json')

const energy = slider(0.523)

//$: s("ワクワク").struct("<0 1>")

// $: s("恋にしちゃったんだ").struct("<0!1 1 0!1000>")
// 
/*
$: s("piano").n("[0 3 4 ~]").scale("C3:major")
*/

// $: s("<supersaw!8 supersaw!3 supersaw!9>").note("0").scale("C:minor").struct("1").release(rand.range(0, 0.1))
// TOO CRAZY to do anything with but SICKKKKKK

//$: s("hihat:1").struct("[[0 1 1]!3 [0 1 1]!3 [0 1 1]!3]")

//$: s("handbells").chord("Cm").struct("[[0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1] [1 0 0 0] 0 0]").legato(4).distort("2:0.5").gain(0.09)



let drums_slider = slider(0.265, 0, 1)
let waku_slider  = slider(0.924, 0, 1)

let notes1 = "[~ C3] Eb4 [Eb4,Eb3] [C4,Eb2]"
let notes2 = "[~ C1] [Eb1,C1] [Eb1,G1] [C1,D1]"

let sick = s("ahah").scrub(perlin.range(0, .7)).lpf(1300).hpf(2350).struct("1!4").rib(52, 1)

let love_the_saw = s("supersaw!16").room(slider(0.356, 0, 2)).dist(energy).pdecay(.12 * energy).xfade(rand.fast(3).range(0, 1))

let fh_upbeats = s("gm_french_horn:2").struct("[0 1]!4").note("<C4 C3>/2")
let waku_saw = s("ワクワク!16".clip(1)).xfade(rand.fast(3).range(0, 1).add(-1))
let drums    = s("bd:2!16").almostNever(x => x.late(0.1)).gain(drums_slider)

// Building

$: stack(drums,
         waku_saw.note(notes1.sub(18)).lpf(waku_slider.mul(4000).add(-2000)),
         love_the_saw.note(notes1).lpf(waku_slider.mul(-20000).add(20000)),
         sick.note("A1").struct("0 [0 0] 1 0").distort(2))

$: stack()

//$: stack(s("bd:2").struct("[0 1] [0 1] [0 1] 0 [1 0]").room(0.3).lpf(400),
//         s("ワクワク").clip(1).add(note("<A1 Eb1 G1 C1>")).struct("[1 1] 0 0 0"),
//         sick.chord("<A2 Eb2>").struct("0 [0 0] 1 0"))



//$: s("恋にしちゃったんだ").scrub(0.01).fast(4).chord("<Eb2 C1>").lpf(perlin.range(700, 2000)).xfade(rand.fast(3).range(0, 1))
//$: stack(s("苦手だった").clip(0.50).struct("1").hpf(rand.range(1000, 2000)).rib(0, 4)).struct("<0 0 1 0>").xfade(rand.range(0, 1))
//$: s("君へのメッセージ").struct("<0 0 0 1>").hpf(perlin.range(1000, 2000))

//$: s("bd!4")
//$: s("hihat").struct("[0 1]!4")


