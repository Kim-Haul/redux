import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineBars } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { plusGenre } from '../redux/modules/cardReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const SubMain = () => {
  // 리덕스 액션 함수 사용하기
  const dispatch = useDispatch();

  // 리덕스에 저장된 값 가져오기
  const RecommendList = useSelector((store) => store.cardReducer.RecommendList);

  // 캐러셀 세팅
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
  };

  // 페이지 이동
  const navigate = useNavigate();

  return (
    <Wrap>
      <Container>
        <div className="topBar">
          <img src="./images/profile_image.png" alt="프로필 이미지" />
          <div className="SearchBax">
            <AiOutlineSearch />
            <input type="text" />
          </div>
          {<AiOutlineBars />}
        </div>
        <div className="banner">
          <StyledSlider {...settings}>
            <img src="./images/bg1.jpg" alt="배너 이미지" />
            <img src="./images/bg2.jpg" alt="배너 이미지" />
            <img src="./images/bg3.jpg" alt="배너 이미지" />
            <img src="./images/bg4.jfif" alt="배너 이미지" />
          </StyledSlider>
        </div>
        <div className="intro">
          <div className="title">
            리덕스로 상태관리할테니, <br />
            메인에 띄울 장르를 골라보세요.
          </div>
          <div className="subTitle">
            <span
              style={{ color: 'gray', cursor: 'pointer' }}
              onClick={() => {
                navigate('/');
              }}
            >
              다시 돌아가기
            </span>
          </div>
          <div className="content">
            <div
              className="card"
              onClick={() => {
                RecommendList.length < 6
                  ? dispatch(plusGenre('액션'))
                  : alert('더 이상 추가할 수 없습니다.');
              }}
            >
              액션
            </div>
            <div
              className="card"
              onClick={() => {
                RecommendList.length < 6
                  ? dispatch(plusGenre('공포'))
                  : alert('더 이상 추가할 수 없습니다.');
              }}
            >
              공포
            </div>
            <div
              className="card"
              onClick={() => {
                RecommendList.length < 6
                  ? dispatch(plusGenre('멜로'))
                  : alert('더 이상 추가할 수 없습니다.');
              }}
            >
              멜로
            </div>
            <div
              className="card"
              onClick={() => {
                RecommendList.length < 6
                  ? dispatch(plusGenre('SF'))
                  : alert('더 이상 추가할 수 없습니다.');
              }}
            >
              SF
            </div>
          </div>
        </div>
      </Container>
    </Wrap>
  );
};

export default SubMain;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 480px;
  height: 100%;
  display: flex;
  flex-direction: column;
  // 최상위 툴바
  .topBar {
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    img {
      width: 30px;
      height: 30px;
    }
    .SearchBax {
      background-color: #f1f1f1;
      display: flex;
      align-items: center;
      border-radius: 20px;
      svg {
        margin: 0 10px;
        color: gray;
      }
      input {
        width: 300px;
        height: 35px;
        background-color: transparent;
        border: none;
        outline: none;
      }
    }
    svg {
      width: 22px;
      height: 22px;
      cursor: pointer;
    }
  }
  // 이미지 배너
  .banner {
    margin-top: 10px;
    img {
      width: 100%;
      height: 390px;
      // 가로, 세로 비율을 유지하면서 해당 영역에 꽉 차게.
      object-fit: cover;
    }
  }
  // 소개글
  .intro {
    padding: 10px;
    margin-top: 10px;
    .title {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.2;
    }
    .subTitle {
      font-size: 13px;
      margin-top: 5px;
      color: gray;
    }
    .content {
      display: flex;
      gap: 15px;
      margin-top: 15px;
      .card {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        background-color: #f1f1f1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        cursor: pointer;
        &:hover {
          background-color: #00c7ae;
          color: #fff;
        }
      }
    }
  }
`;
const StyledSlider = styled(Slider)`
  .slick-dots {
    position: absolute;
    bottom: 10px;
  }
`;
