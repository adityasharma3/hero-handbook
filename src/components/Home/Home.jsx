import React, { useEffect, useState } from 'react';

const Home = (props) => {

    const [heroes, setHeroes] = useState(['']);

    useEffect(() => {
        try {
        fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0])
                setHeroes(data)
            })
        }

        catch {
            alert('api not responding');
        }
    }, []);


    const openThisCharacter = (props) => {

        // console.log(props)
        // props.openCharacter(name);
    }

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
                        id={hero.name}
                        className="hero-container"
                        style={{
                            margin: '1rem 0',
                            backgroundColor: '#202138',
                            padding: '0.65rem',
                            borderRadius: '1rem'
                        }}

                    >
                        <img
                            id={hero.p}
                            src={hero.images.sm}
                            alt={hero.name}
                            style={{
                                borderRadius: '1rem'
                            }}
                        />

                        <a 
                            id={hero.name}
                            href={"/viewCharacter/" + `${hero.name}`}
                            // href='#'
                            onClick = {openThisCharacter(hero.name)}
                        >
                            <h2>{hero.name}</h2>
                        </a>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default Home;