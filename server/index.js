const express = require('express');
const app = express();

app.get('/api/greeting', (req, res) => {
    setTimeout(() => res.send('howdy'), 1000);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server started on ${PORT}.`));
