var quotes = [
    { quoteContent: 'Be yourself; everyone else is already taken.', quoteAuthor: '--Oscar Wilde' },
    { quoteContent: 'So many books, so little time.', quoteAuthor: '--Frank Zappa' },
    { quoteContent: 'A room without books is like a body without a soul.', quoteAuthor: '--Marcus Tullius Cicero' },
    { quoteContent: 'You only live once, but if you do it right, once is enough.', quoteAuthor: '--Mae West' },
    { quoteContent: 'Be the change that you wish to see in the world.', quoteAuthor: '--Mahatma Gandhi' },
    { quoteContent: 'If you tell the truth, you don\'t have to remember anything.', quoteAuthor: '--Mark Twain' },
    { quoteContent: 'A friend is someone who knows all about you and still loves you.', quoteAuthor: '--Elbert Hubbard' },
    { quoteContent: 'To live is the rarest thing in the world. Most people exist, that is all.', quoteAuthor: '--Oscar Wilde' },
    { quoteContent: 'Without music, life would be a mistake.', quoteAuthor: '--Friedrich Nietzsche' },
    { quoteContent: 'It is better to be hated for what you are than to be loved for what you are not.', quoteAuthor: '--Andre Gide' },
]

var quoteIndex = 0;


var printQuote = function () {
    if (quoteIndex< quotes.length) {
        document.getElementById('quoteContent').innerHTML = `<i class="fa-solid fa-quote-left"></i> ${quotes[quoteIndex].quoteContent} <i class="fa-solid fa-quote-right"></i>`;
        document.getElementById('quoteAuthor').innerHTML = quotes[quoteIndex].quoteAuthor;
    }

    var newQuoteIndex = Math.floor(Math.random() * quotes.length);

    while (newQuoteIndex == quoteIndex) {
        newQuoteIndex = Math.floor(Math.random() * quotes.length);
    }
    quoteIndex = newQuoteIndex;
}

printQuote();
