$(document).ready(function() {
    var cNote = document.getElementById('cAudio');

      $('#cstrum').mouseover(function() {
          cNote.currentTime = 0;
          cNote.play();
      });

      $('#c').mousedown(function() {
            cNote.currentTime = 0;
            cNote.play();
      });


    var dNote = document.getElementById('dAudio');

      $('#dstrum').mouseover(function() {
          dNote.currentTime = 0;
          dNote.play();
      });

      $('#d').mousedown(function() {
          dNote.currentTime = 0;
          dNote.play();
      });

    var eNote = document.getElementById('eAudio');

      $('#estrum').mouseover(function() {
          eNote.currentTime = 0;
          eNote.play();
      });

      $('#e').mousedown(function() {
          eNote.currentTime = 0;
          eNote.play();
      });

    var fNote = document.getElementById('fAudio');

      $('#fstrum').mouseover(function() {
          fNote.currentTime = 0;
          fNote.play();
      });

      $('#f').mousedown(function() {
          fNote.currentTime = 0;
          fNote.play();
      });

    var gNote = document.getElementById('gAudio');

      $('#gstrum').mouseover(function() {
          gNote.currentTime = 0;
          gNote.play();
      });

      $('#g').mousedown(function() {
          gNote.currentTime = 0;
          gNote.play();
      });

    var aNote = document.getElementById('aAudio');

      $('#astrum').mouseover(function() {
          aNote.currentTime = 0;
          aNote.play();
      });

      $('#a').mousedown(function() {
          aNote.currentTime = 0;
          aNote.play();
      });

    var bNote = document.getElementById('bAudio');

      $('#bstrum').mouseover(function() {
          bNote.currentTime = 0;
          bNote.play();
      });

      $('#b').mousedown(function() {
          bNote.currentTime = 0;
          bNote.play();
      });

});
