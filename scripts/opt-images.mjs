import sharp from "sharp";
const A="/home/claude/old-assets/data/";
const jobs = [
 ["art_items/agua/agua.png","art/water-swim"],["art_items/frankenstein.png","art/frank"],["art_items/flower_head.png","art/flower-head"],
 ["art_items/christie_drums/chris.png","art/christie-drums"],["art_items/jimmy/jim.png","art/jimmy"],["art_items/art_class.JPG","art/perspective"],
 ["art_items/orange/orange.jpg","art/orange"],["art_items/birds.jpg","art/birds"],["art_items/finger_painting.jpg","art/finger-painting"],
 ["art_items/ballet.JPG","art/ballet"],["art_items/old_bird.jpg","art/old-birds"],["art_items/music.jpg","music/music"],["music_Cover.png","music/cover"],
 ["mereal.png","me"],["extracs/perk-demo.jpeg","perk-demo"],["projects/injecto.png","injection-sim"],["projects/freshsave.png","freshsave"],["projects/grfn.jpeg","grfn"]];
for (const [src,out] of jobs){
  const img = sharp(A+src).rotate();
  const m = await img.metadata();
  const info = await img.resize({width:1600,height:1600,fit:"inside",withoutEnlargement:true}).webp({quality:80}).toFile(`public/${out}.webp`);
  console.log(out, m.width+"x"+m.height, "->", info.width+"x"+info.height, Math.round(info.size/1024)+"KB");
}
