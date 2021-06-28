import React, { useEffect, useState } from 'react';

const Home = () => {

    const [heroes, setHeroes] = useState(['']);

    useEffect(() => {
        fetch("https://superhero-search.p.rapidapi.com/api/heroes", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "64e1b6ec71msh79f17be5fb5db5dp1ecd69jsnb974c96d020c",
                "x-rapidapi-host": "superhero-search.p.rapidapi.com"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data[0])
                setHeroes(data)
            })
    }, []);


    return (

        <div
            className="heroes"
            style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '2rem 5vw 2rem 12vw '
            }}
        >
            <h1>Home Page</h1><br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, harum ipsa. Odit alias deserunt neque nam repellat quisquam quidem veritatis, omnis doloribus quaerat saepe assumenda cum eum hic quam atque?</p>



            <div
                className="hero-display"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap'
                }}
            >
                {heroes.map((hero) =>
                    <div 
                        id = {hero.id} 
                        className="hero-container"
                        style = {{
                            margin: '1rem 0',
                            backgroundColor: '#202138',
                            padding: '0.65rem',
                            borderRadius: '1rem'
                        }}
                    >
                        <img 
                            src={hero.images.md}
                            alt={hero.name}
                            style = {{
                                borderRadius: '1rem'
                            }} 
                        />
                        <h2>{hero.name}</h2>
                    </div>
                )
                }


            </div>
        </div>
    );
}

export default Home;