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
    padding: 40px 0px 99px;
    width: 1450px;
    height: 500px;
    background-color: #8cb6dc;
`;

export const artGalleryTitleBlock = css`

`;

export const flexBox3 = css`
    display: flex;
    justify-content: center;
    
`;

export const boardInner = css`
    width: 278.01px;
    height: 412.13px;
    background-color: #c0d684;
`;

export const infoBlock = css`
   
`;