import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineBars } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useSelector } from 'react-redux';
import { deleteGenre } from '../redux/modules/cardReducer';
import { useDispatch } from 'react-redux';

const Main = () => {
  // 리덕스 액션 함수 사용하기
  const dispatch = useDispatch();

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

  // 리덕스에 저장된 값 가져오기
  const RecommendList = useSelector((store) => store.cardReducer.RecommendList);

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
            그냥{' '}
            <span
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => {
                navigate('/submain');
              }}
            >
              리덕스
            </span>
            만 사용해보긴 뭐해서 조금 꾸며봄.
          </div>
          <div className="subTitle">
            상단 리덕스 글자를 클릭하면 이동합니다.
          </div>
          <div className="content">
            {RecommendList.map((list, idx) => {
              return (
                <div className="card" key={idx}>
                  {list.genre}
                </div>
              );
            })}
          </div>
        </div>
        <div className="intro">
          <div
            className="title"
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              dispatch(deleteGenre('액션'));
              dispatch(deleteGenre('공포'));
              dispatch(deleteGenre('멜로'));
              dispatch(deleteGenre('SF'));
            }}
          >
            초기화
          </div>
        </div>
      </Container>
    </Wrap>
  );
};

export default Main;

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
