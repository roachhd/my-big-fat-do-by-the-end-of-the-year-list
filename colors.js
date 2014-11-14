<script type="text/javascript">
    (function(){
      var neonColors = [
        '#ff00ff',
        '#00ffff',
        '#00ff00',
        '#ffff00',
        '#ff0000',
        '#0000ff',
        '#7920FF',
        '#FD0987',
        '#FF3300',
        '#FF6EC7',
        '#00FF66',
        '#4D4DFF',
        '#67C8FF',
        '#7BFB2D',
        '#AAFF00',
        '#FF00AA',
        '#AA00FF',
        '#FF7F00',
        '#228DFF',
        '#ff6d38',
        '#f90000',
        '#fd8b25',
        '#25d7fb',
        '#7920ff',
        '#fe51c3',
        '#ff9072',
        '#ff63a2',
        '#e3e641',
      ];

      var links = document.getElementById('links');
      var linkItems = links.getElementsByTagName('a');

      for ( var i = 0; i < linkItems.length; i++ ) {
        linkItems[i].style.backgroundColor = neonColors[ Math.floor(Math.random() * (neonColors.length + 1)) ];
      }
    })();
  </script>
