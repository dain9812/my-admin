import * as React from "react";
import { Menu as MenuList, MenuItemLink } from "react-admin";
import CampaignIcon from "@mui/icons-material/Campaign";
import UserIcon from "@mui/icons-material/Group";
import SubMenu from "./SubMenu";

interface Item {
  title: string;
  path: string;
  icon?: JSX.Element;
}

interface List {
  main: Item;
  sub?: Array<Item>;
}

const list: Array<List> = [
  {
    main: {
      title: "공지사항",
      path: "",
      icon: <CampaignIcon />,
    },
    sub: [
      { title: "공지사항", path: "/posts" },
      { title: "팝업 관리", path: "/posts" },
      { title: "프로젝트 공시", path: "/posts" },
    ],
  },
  {
    main: {
      title: "회원 관리",
      path: "",
      icon: <UserIcon />,
    },
    sub: [
      { title: "회원 정보", path: "/posts" },
      { title: "회원 로그인 이력", path: "/posts" },
      { title: "로그인 차단 계정", path: "/posts" },
      { title: "팝업 기록", path: "/posts" },
      { title: "이메일 인증 이력", path: "/posts" },
    ],
  },
  { main: { title: "회원 자산", path: "/posts", icon: <UserIcon /> } },
  { main: { title: "자산 관리", path: "/posts", icon: <CampaignIcon /> } },
  { main: { title: "거래쌍 관리", path: "/posts", icon: <CampaignIcon /> } },
  { main: { title: "지급 및 회수", path: "/posts", icon: <CampaignIcon /> } },
  { main: { title: "원화 입출금", path: "/posts", icon: <CampaignIcon /> } },
  {
    main: { title: "코인 입출금", path: "", icon: <CampaignIcon /> },
    sub: [
      { title: "네트워크 목록", path: "/posts" },
      { title: "코인 지갑 연결", path: "/posts" },
      { title: "회원 입금 주소", path: "/posts" },
      { title: "코인 입금 내역", path: "/posts" },
      { title: "코인 출금 내역", path: "/posts" },
      { title: "개인 지갑 현황", path: "/posts" },
    ],
  },
  {
    main: { title: "거래 내역", path: "", icon: <CampaignIcon /> },
    sub: [
      { title: "주문 내역", path: "/posts" },
      { title: "체결 내역", path: "/posts" },
      { title: "체결 내역 통계", path: "/posts" },
    ],
  },
  { main: { title: "자산 변동 내역", path: "/posts", icon: <CampaignIcon /> } },
  {
    main: { title: "통계", path: "", icon: <CampaignIcon /> },
    sub: [
      { title: "지갑 통계", path: "/posts" },
      { title: "통계 대상 지갑", path: "/posts" },
      { title: "통계", path: "/posts" },
    ],
  },
  {
    main: { title: "정책", path: "", icon: <CampaignIcon /> },
    sub: [
      { title: "정책 문서", path: "/posts" },
      { title: "수수료 관리", path: "/posts" },
      { title: "출금 한도 관리", path: "/posts" },
    ],
  },
  {
    main: { title: "메세지 전송", path: "", icon: <CampaignIcon /> },
    sub: [
      { title: "전송 이력", path: "/posts" },
      { title: "이메일 전송", path: "/posts" },
    ],
  },
  {
    main: { title: "설정", path: "", icon: <CampaignIcon /> },
    sub: [
      { title: "인증 앱 관리", path: "/posts" },
      { title: "기타 설정", path: "/posts" },
      { title: "액세스 토큰 관리", path: "/posts" },
    ],
  },
  {
    main: { title: "관리자 기능", path: "", icon: <UserIcon /> },
    sub: [
      { title: "관리자 계정 관리", path: "/posts" },
      { title: "관리자 사용 기록", path: "/posts" },
      { title: "데이터 다운로드", path: "/posts" },
    ],
  },
];

const Menu = () => (
  <MenuList>
    {list.map((menu) =>
      !menu.sub ? (
        <MenuItemLink
          to={menu.main.path}
          primaryText={menu.main.title}
          leftIcon={menu.main.icon}
        />
      ) : (
        <SubMenu primaryText={menu.main.title} leftIcon={menu.main.icon}>
          {menu.sub.map((item) => (
            <MenuItemLink to={item.path} primaryText={item.title} />
          ))}
        </SubMenu>
      )
    )}
  </MenuList>
);

export default Menu;
