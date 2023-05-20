import React from 'react';

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'sans-serif',
    },
    heading: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '30px',
        textAlign: 'center',
    },
    section: {
        marginBottom: '50px',
    },
    skills: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    skill: {
        background: '#eee',
        borderRadius: '5px',
        padding: '10px 20px',
        margin: '10px',
        fontSize: '18px',
    },
};

export default function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Jacob VanDuyn</h1>
            <section style={styles.section}>
                <h2>About Me</h2>
                <p>
                    Jake VanDuyn is a fullstack software engineer located in Charlotte, North Carolina.
                    Jacob graduated the full stack coding bootcamp from University of North Carolina
                    Charlotte in April 2023. Prior to living in Charlotte, Jake and his family resided in
                    the centennial state of Colorado. He is a father to a wonderful two year old son Axel,
                    and a loving partner Maggie. Prior to being a software engineer, Jake spent five years
                    being a commercial auto bodily injury adjuster with Travelers Insurance. During that
                    time, he learned great interpersonal communication skills, leadership qualities, and
                    problem solving techniques.
                </p>
            </section>
            <section style={styles.section}>
                <h2>Skills</h2>
                <div style={styles.skills}>
                    <div style={styles.skill}>Javascript</div>
                    <div style={styles.skill}>React</div>
                    <div style={styles.skill}>CSS</div>
                    <div style={styles.skill}>Node.js</div>
                    <div style={styles.skill}>Mongo</div>
                    <div style={styles.skill}>Graphql</div>
                    <div style={styles.skill}>SQL</div>
                </div>
            </section>
        </div>
    );
}
