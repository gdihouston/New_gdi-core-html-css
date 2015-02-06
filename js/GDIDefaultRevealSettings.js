// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    keyboard: {
        13: 'next' // go to the next slide when the ENTER key is pressed
    },

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/none
    /*
    multiplex: {
        secret: null, // null so the clients do not have control of the master presentation
        id: '', // id, obtained from socket.io server
        url: '' // Location of your socket.io server
    }, */
    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'reveal.js/lib/js/classList.js', condition: function () { return !document.body.classList; } },
        { src: 'reveal.js/plugin/markdown/showdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
        { src: 'reveal.js/plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
        { src: 'reveal.js/plugin/highlight/highlight.js', async: true, condition: function () { return !!document.querySelector('pre code'); }, callback: function () { hljs.initHighlightingOnLoad(); } },
        { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function () { return !!document.body.classList; } },
        { src: 'reveal.js/plugin/notes/notes.js', async: true, condition: function () { return !!document.body.classList; } },
        { src: 'http://cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.16/socket.io.min.js', async: true },
        { src: 'reveal.js/plugin/multiplex/master.js', async: true },
        { src: 'reveal.js/plugin/multiplex/client.js', async: true }

    ]
});
