import createApp from "./app";

const PORT = process.env.PORT

const app = createApp();

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});