import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    h1 {
        font-size: 3.5rem;
    }
    h2 {
        font-size: 3rem;
        font-family: "Latte-outro";
    }
    h3 {
        font-size: 2rem;
    }
`
export const Content = styled.div`    
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    width: 100vw;
    img {
        margin: 0 auto;
        width: 200px;
    }
`
export const EachContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 350px;
    justify-content: space-around;
    margin: 1rem auto;
`