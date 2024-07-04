import React from "react";
import { IoEnterOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link, Text } from "../../ui/Text/Text";
import style from "./Header.module.scss";
import { Button, ButtonIconed } from "../../ui/Button/Button";

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <Link style={style.link} color="white">
          БИЛЕТЫ И АБОНЕМЕНТЫ
        </Link>
        <Link style={style.link} color="white">
          Как купить?
        </Link>
        <Link style={style.link} color="white">
          Правила
        </Link>
        <Link style={style.link} color="white">
          Возврат билетов
        </Link>
      </nav>
      <div className={style.headerBtns}>
        <ButtonIconed
          children={<Text color="white">Войти</Text>}
          icon={<IoEnterOutline size={26} color="white" />}
        />
        <Button children={<RxHamburgerMenu size={30} color="white" />} />
      </div>
    </header>
  );
};

export default Header;
