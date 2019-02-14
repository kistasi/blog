module.exports = {
  index: (req, res) => {
    res.send('posts admin index');
  },
  create: (req, res) => {
    res.send('posts admin create');
  },
  store: (req, res) => {
    res.send('posts admin store');
  },
  show: (req, res) => {
    res.send('posts admin show');
  },
  edit: (req, res) => {
    res.send('posts admin edit');
  },
  update: (req, res) => {
    res.send('posts admin update');
  },
  destory: (req, res) => {
    res.send('posts admin destroy');
  },
};
