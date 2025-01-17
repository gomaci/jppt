import { css } from "@emotion/react";

export const header = css`
    box-sizing: border-box;
    border-bottom: 1px solid #767676;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 48px;
    /* background-color: aliceblue; */
`;

export const inheader = css`
    display: flex;
    justify-content: space-between;
    width: 1450px;
    height: 48px;
    /* background-color: bisque; */
`;

export const spanBox1 = css`
    margin-top: 12px;
    
    & > span {
            padding-right: 15px;
            font-family: 'Pretendard';
            color: #b5b1b1; 
        }

    a {
        text-decoration: none;
        color: #b5b1b1;
    }

`;

export const spanBox2 = css`
     margin-top: 12px;

    & > span {
            padding-right: 15px;
            font-family: 'Pretendard';
            color: #b5b1b1;
        }
`;

export const main = css`
    width: 100%;
    height: 1000px;
    /* background-color:#2e2c2c; */
`;

export const flexBox = css`
      // flex의 기본 형태가 row라서 자식들이 옆으로 나열된다
      display: flex;

`;


export const logoBox = css`
    width: 288px;
    height: 234.11px;
    padding: 21.6px 24px 0px;
    /* background-color: #ce9696; */

    /* & > h1 {
         color: #ffffff;
    } */
    
    a {
        text-decoration: none;
        color: #dbdbdb;
    }

`;

export const navBlock = css`
    display: flex;
    justify-content: center;
    padding: 32px 24px 8px;
    width: 288px;
    height: 260px;
    /* background-color: #968989; */
`;

export const navBox = css`
    width: 240px;
    height: 346.44px;
    /* background-color: #a9a7a7; */

    & > p {
        margin: 10px;
        font-size: 22px;
        font-family: 'Pretendard Semibold';
        color: #ffffff;
    }

    a {
        text-decoration: none;
        color: #ffffff;
    }

`;

// export const inline = css`
//     display: inline;
// `;

export const mainContent = css`
    margin-left: 70px;
    padding: 21.6px 24px 24px;
    width: 980.8px;
    height: 581.6px;
    /* background-color: #f7d26a; */
`;

export const inMainContent = css`
    box-sizing: border-box;
    border-bottom: 1px solid #ffffff;
    padding: 0px 0px 21.6px;
    width: 932.8px;
    height: 581.6px;
    /* background-color: #78acdd; */

    & > p {
        font-size: 37px;
        font-family: 'Pretendard';
        color: #ffffff;
    }
`;

export const imgBlock = css`
    width: 932.8px;
    height: 500px;
    /* background-color: #e97ad5; */
`;


export const flexBox2 = css`
    display: flex;
    justify-content: center;
`;

export const artGalleryContent = css`
    /* box-sizing: border-box; */ // 여기서 박스사이징하면 내가 원하는 곳 보더 바텀에 줄 못 넣고 박스 모양 바뀜
    border-bottom: 1px solid #ffffff;
    padding: 40px 0px 99px;
    width: 1450px;
    height: 500px;
    /* background-color: #8cb6dc; */
`;

export const artGalleryTitleBlock = css`
    margin: 0px 0px 40px;

    & > p {
        font-size: 28px;
        font-family:'Pretendard Semibold';
        color: #dbdbdb;
    }
`;

export const flexBox3 = css`
    display: flex;
    justify-content: space-between;
    
`;

export const boardInner = css`
    width: 278.01px;
    height: 412.13px;
    /* background-color: #c0d684; */
`;

export const imgBlock2 = css`
    width: 278.01px;
    height: 184.83px;
    /* background-color: #de66e9; */
`;

export const infoBlock = css`

    & > p {
        margin: 9px 0px 7.5px;
        font-size: 28px;
        font-family: 'Pretendard Semibold';
        color: #dbdbdb;
    }

    & > span {
        margin: 8px 0px 7.5px;
        color: #dbdbdb;
    }
`;

export const tagBlock = css`
    display: flex;
    flex-direction: column;
    margin: 16px 0px 6px -2px;
    
`;

export const flexBox4 = css`
    display: flex;
`;

export const tag1 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 49.2px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag2 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 104.4px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag3 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 76.8px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag4 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 49.2px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag5 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 63px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag6 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 49.2px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag7 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 49.2px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag8 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 104.4px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag9 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 63px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag10 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 49.2px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag11 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 49.2px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;

export const tag12 = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    margin: 4px 2px;
    padding: 2px 10px;
    width: 63px;
    height: 25px;
    font-size: 15px;
    font-family:'Pretendard';
    color: #dbdbdb;
`;


export const displayContent = css`
    padding: 40px 0px 99px;
    width: 1450px;
    height: 700px;
    background-color: #def190;
`;

export const displayTitleNavBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 40px;
    width: 1450px;
    height: 70px;
    background-color: #71a6f5;
`;

export const displayFont = css`
    font-size: 25px;
    font-family: 'Pretendard Semibold';
    color: #dbdbdb;
`;

export const displayFlexBox = css`
    display: flex;
    

    & > p {
        padding: 0px 10px 0px;
        font-size: 28px;
        font-family: 'Pretendard Semibold';
        color: #dbdbdb;
        
    }
`;

export const displayAllFont = css`
    font-size: 15px;
    font-family: 'Pretendard';
    color: #dbdbdb;
`;

export const flexBox5 = css`
    display: flex;

`;

export const displayBoardInner = css`
    width: 400px;
    height: 637px;
    background-color: #df9595;
`;

export const displayImgBlock = css`
    width: 400px;
    height: 400px;
    background-color: #baf078;
`;

export const displayInfoBlock = css`
    width: 400px;
    height: 237px;
    background-color: #ed71dd;
`;

export const displayA = css`
   font-size: 15px;
   font-family: 'Pretendard';
   color: #dbdbdb;
`;

export const displaySpanTittle = css`
    font-size: 18px;
    font-family: 'Pretendard Semibold';
    color: #dbdbdb;
`;

export const displayP = css`
    margin: 10px 0px 0px;
    font-size: 28px;
    font-family: 'Pretendard Semibold';
    color: #dbdbdb;
`;

export const displaySpan = css`
    margin: 10px 0px 0px;
`;