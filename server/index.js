const app = require('express')();

app.get('/api/greeting', (req, res) => {
    setTimeout(() => res.send('hello'), 1000);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server started on ${PORT}.`));
