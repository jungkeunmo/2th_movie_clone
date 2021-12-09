import React from "react";
import MovieBox from "./components/movieBox";

const movies = [
    {
        title: "ハウルの動く城",
        score: 10,
        poster: 
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%ED%95%98%EC%9A%B8%EC%9D%98_%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94_%EC%84%B1_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
    },
    {
        title: "未来の未来",
        score: 9.9,
        poster: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOe82Tn9-1qoozwL5FUXeRj9SNfgb49ximva1avEUqgIlT2AYQr7_WZdbew_Z3lSQisA&usqp=CAU"
    },
    {
        title: "声の形",
        score: 10,
        poster: 
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1lcG/image/Q1jxSjpHdaI4Hv0zWM4K4CHBqCs.jpg"
    },
    {
        title: "海水の子供",
        score: 9.7,
        poster: 
        "https://w.namu.la/s/ad5d512556e2ff207063da02050e589e9da9e7fda6218efc5a9101fb15f3429bc0a5eb8d53f74fdc24359ebc00abd7efc2448029a0d6eba6483dd928e403d541684704c08e063faac7261e1ce33010aff071a359799d6f37739d6cac544d78cf"
    },
    {
        title: "おかみこども",
        score: 10,
        poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtt4KF9ELezSQk-GtN5eqpxow_nY3RbwV53rdgvViXeZhvdVN7dMqf4skvox-vChG_qmo&usqp=CAU"
    },
    {
        title: "モノノケヒメ",
        score: 9.9,
        poster:
        "https://w.namu.la/s/caf95d1cb571113725f8e42845d6afd43165bb28f1e71d69dd8ba51bca86397147843f7aae7094e9eec994a6b1ccb6002af7259345c7fa9a3cacd1befbbf8d80b1661eb17ebbf38d808960c44af3e4943c2892b8df8c96fbdd47dbd089691e76"
    }
];

class App extends React.Component {
    render() {
        return (
            <main className="main">
                <section className="content">
                    {movies.map((movie) => {
                        return <MovieBox movie={movie} />
                    })}
                </section>
            </main>
        );
    };
};

export default App;