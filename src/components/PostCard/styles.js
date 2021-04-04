import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 8vw; // margin esquerda
  width: 592px;
  max-width: 592px;
  position: relative;
  padding-bottom: 25px;
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PersonContainer = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  display: flex;
  justify-content: space-between;
  height: 56px;
  width: 56px;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

export const Author = styled.a`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  :hover {
    text-decoration: underline;
  }
  > span {
    margin-top: 1px;
    margin-left: 4px;
    font-weight: 400;
    font-size: 14px;
    color: var(--black);
  }
`;

export const Description = styled.div`
  display: inline;
`;

export const Song = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 5px;

  a {
    font-weight: 600;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  img {
    width: 18px;
    height: 25px;
    margin-right: 5px;
  }
`;

export const Tag = styled.a`
  cursor: pointer;
  font-weight: bold;
  margin-left: 4px;
  font-size: 16px;
  :hover {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  margin-left: 68px;
  display: inline-block
`;

export const ActionsContainer = styled.div`
  visibility: hidden;
  width: 40px;
  height: 40px;
  bottom: 15px;
  left: 12px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoContainer = styled.div`
  cursor: pointer;
  width: calc(0.56 * (500px + ((100vw - 768px) / 1152) * 100));
  position: relative;
  display: block;
  margin-top: 15px;
  :hover {
    ${ActionsContainer} {
      visibility: visible;
    }
  @media (max-width: 600px) {
    position: absolute;
    margin: 0;
  } 
  }
`;
export const Video = styled.video`
  max-width: 100%;
  border-radius: 9px;
`;

export const PlayerIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Actions = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 48px;
  font-size: 13px;
  float: right;
  left: -16vh;
  top: 22vw;
  /* display: flex;
  align-items: center; // Padrão Instagram das ações
  padding: 0 10px;
  margin-top: 12px; */
  @media (max-width: 750px) {
    margin-right: 10%;
    margin-top: 30%
  }
`;

export const Action = styled.div`
  display: block; // display: flex; para deixar um ao lado do outro 
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin-right: 25px;
  cursor: pointer;
  margin-bottom: 10px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 4px;
    margin-bottom: -4px; 
    background-color: whitesmoke;
    padding: 15px 15px;
    border-radius: 50%;
  }

  a {
    display: flex;
    justify-content: center;
    color: rgba(30, 30, 30, .7);
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 118px;
  height: 28px;
  font-weight: 600;
  font-size: 16px;
`;
