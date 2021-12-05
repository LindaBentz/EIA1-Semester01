
 namespace A08 {

  window.addEventListener("load", function (): void {
  
    //Arrays
    var sound: string[] = ["assets/A.mp3", "assets/G.mp3", "assets/F.mp3", "assets/C.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var beat: string[] = [sound[1], sound[6], sound[5], sound[3]];
    var remix: string[] = [sound[2], sound[3], sound[6]];
    
  
    //Deklaration Variablen

    
    
    var key: number = 0;
    

    var song: HTMLAudioElement = new Audio(beat[key]);
    var max: number = remix.length - 1;
    var intervall: number = setInterval(rythmus, 250);
  
    
    var play: HTMLElement = document.querySelector("#playbutton");
    


//Spielt Sample beim Klicken auf einen der 9 Buttons
function playSample(AudioFile): void {
  var sound: HTMLAudioElement = new Audio(AudioFile);
  sound.play();
}


//Spielt Beat in Dauerschleife
function rythmus(): void {
  if (key >= beat.length) key = 0;
  if (play.getAttribute("class") == "fas fa-stop") {song = new Audio(beat[key]); playSample(beat[key]); key += 1; }
}




    //Wechsel zwischen Play- und Stoppbutton (Beat spielt und stoppt)
    function playBeat(): void {
      if (play.getAttribute("class") == "fas fa-stop") {
          play.setAttribute("class", "fas fa-play");
          rythmus();
          

      }
      else {
          play.setAttribute("class", "fas fa-stop");
      
          if (play.getAttribute("class") == "fas fa-play") { song.pause(); }
      }
  }
  
  

  
    //Zufälige Zahl zwischen Null und der Länge von Array "zufall" ->remix
    function randomnum(max: number): number {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1));
    }
  
    //Zufälliger Beat aus Array "zufall" ->remix
    function zufall(): void {
        for (var i: number = 0; i <= remix.length; i++) {
          
            beat[i] = remix[randomnum(max)];
        }
    }
  
    //Löscht den definierten Beat 
    function deleteBeat(): void {
      beat.length = 0;
    }
  
    
   
  
     

    //Klick auf Buttons         
    document.getElementById("buttoneins").addEventListener("click", function (): void { playSample(sound[0]);   });
    document.getElementById("buttonzwei").addEventListener("click", function (): void { playSample(sound[1]); });
    document.getElementById("buttondrei").addEventListener("click", function (): void { playSample(sound[2]);  });
    document.getElementById("buttonvier").addEventListener("click", function (): void { playSample(sound[3]);  });
    document.getElementById("buttonfünf").addEventListener("click", function (): void { playSample(sound[4]);  });
    document.getElementById("buttonsechs").addEventListener("click", function (): void { playSample(sound[5]); });
    document.getElementById("buttonsieben").addEventListener("click", function (): void { playSample(sound[6]);  });
    document.getElementById("buttonacht").addEventListener("click", function (): void { playSample(sound[7]);  });
    document.getElementById("buttonneun").addEventListener("click", function (): void { playSample(sound[8]); });
  
    //Klick auf Icons
    document.querySelector("#playbutton").addEventListener("click", function (): void { playBeat(); });
    document.querySelector("#trashbutton").addEventListener("click", function (): void { deleteBeat(); });
    document.querySelector("#shuffle").addEventListener("click", function (): void { zufall(); });
    
  
  }); }
  
  
  

