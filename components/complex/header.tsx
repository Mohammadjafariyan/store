import SkeletonLazyImage from "@/components/basic/skeleton-lazy-image";
import Head from "next/head"
import Image from "next/image"

import HeaderSearch from "@/components/complex/header-search";
import HeaderLoginRegisterButton from "@/components/basic/header-login-register-button";
import { HeaderBasket } from "@/components/basic/header-basket";
import { MegaMeno } from "@/components/basic/mega-menu";
import { GalleriaIndicatorDemo } from "@/components/complex/gallery";
import { SelectCityModal } from "@/components/complex/select-city-modal";
import { InfoBadges } from "@/components/complex/info-badges";
import OrderPanel from "@/components/complex/order-panel";
import MostViewed from "@/components/complex/most-viewed";
import MostSelled from "@/components/complex/most-selled";
import { FooterLinks } from "@/components/complex/footer";
import LoginRegisterModal from "@/components/complex/auth-utils/login-register-modal";
import React, { Component } from "react";
import Link from "next/link";


export default class Header extends React.Component {

  render() {
    return (
      <>
       


            <nav className=" " >
              <div className="">
                <a className="navbar-brand" >
                  <img src={'/img/sample-header.gif'} width='100%' height='50px' className="sample-header" alt="header" />

                </a>
              </div>
            </nav>







            <nav className="navbar navbar-expand-lg " >
              <div className="container-fluid ">
                <a className="navbar-brand  me-5 pe-5" >
                  <Link href={'/'} shallow={true}> <img src={'/img/logo.svg'} width={100} height={50} alt="لوگو" /></Link>


                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <HeaderSearch ></HeaderSearch>

                <div className="collapse navbar-collapse  ms-5 ps-5" id="navbarTogglerDemo02">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      {/* <a className="nav-link active" aria-current="page" >Home</a> */}
                      {/* <HeaderLoginRegisterButton /> */}
                      <LoginRegisterModal />
                    </li>
                    <li className="nav-item">
                    </li>
                    <span className='text-muted' style={{ fontSize: '33px', color: 'rgb(33 37 41 / 28%)' }}>| </span>
                    <li className="nav-item">
                      <HeaderBasket />

                    </li>
                    {/*  <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
                  </ul>

                </div>
              </div>
            </nav>




            <nav className="navbar navbar-expand-lg bg-body-tertiary link-bottom-dec ">
              <div className="container-fluid ">

                <div className="me-5 pe-5" >

                  <MegaMeno />
                  <div className="nav-item dropdown">


                    <div className="dropdown-content">
                      <div className="card" >
                        <div className="card-body mega-menu-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                          <a className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link text-muted "  >سوپرمارکت</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-muted" >پرفروش ترین ها</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-muted" >تخفیف ها و پیشنهاد ما</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-muted" >شگفت انگیز ها </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-muted" >سوالی دارید ؟</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-muted" >در دیجی کالا بفروشید</a>
                    </li>
                    {/*  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li> */}
                  </ul>

                  <ul className="navbar-nav ms-5 ps-5">
                    <li className="collapse navbar-collapse">
                      <SelectCityModal />
                    </li>
                  </ul>
                </div>
              </div>
            </nav>


      </>
    )
  }
}