let posts = [
  { id: 1, title: "Découverte de Node.js", content: "Node.js permet de créer des applications serveur en JavaScript." },
  { id: 2, title: "Introduction à PostgreSQL", content: "PostgreSQL est un système de gestion de base de données relationnelle puissant." },
  { id: 3, title: "RESTful API pour débutants", content: "Les APIs RESTful permettent la communication entre client et serveur." },
  { id: 4, title: "Express.js en pratique", content: "Express.js simplifie la création de serveurs HTTP avec Node.js." },
  { id: 5, title: "Gestion des erreurs en Node", content: "Il est important de gérer les erreurs pour rendre votre application robuste." },
  { id: 6, title: "Sécurité des APIs", content: "Protéger une API inclut l’authentification, l’autorisation et la validation des données." },
  { id: 7, title: "Introduction au front-end", content: "Le front-end concerne tout ce que l’utilisateur voit et avec quoi il interagit." },
  { id: 8, title: "Asynchronisme en JavaScript", content: "Les callbacks, Promises et async/await permettent de gérer le code asynchrone." },
  { id: 9, title: "Utiliser Postman pour tester une API", content: "Postman est un outil pratique pour tester les endpoints de votre API." },
  { id: 10, title: "Déploiement d’une application Node", content: "Déployer une app Node.js sur un serveur ou cloud permet de la rendre accessible à tous." }
];

const getAllPosts = (req, res) => res.json(posts);

const getPostById = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
};

const updatePost = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  const { title, content } = req.body;
  post.title = title || post.title;
  post.content = content || post.content;
  res.json(post);
};

const deletePost = (req, res) => {
  const index = posts.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Post not found" });
  posts.splice(index, 1);
  res.json({ message: "Post deleted" });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
