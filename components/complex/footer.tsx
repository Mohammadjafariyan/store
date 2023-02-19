import Link from "next/link";
import React from "react";
import { GlobalConstants } from "../abstract/global";
import SkeletonLazyImage from "../basic/skeleton-lazy-image";
import { InfoBadgesProduct } from "./info-badges-product";

export function FooterLinks() {



  return (


    <div className="container-fluid foot">
      <footer className="container ">
        <div className="row">



          <Link href={'/'} shallow={true}> <SkeletonLazyImage src='/img/logo.svg' width={100} height={100} /></Link>

          <div className="col-md-5">
              <small className="text-muted" style={{ fontWeight: 'lighter' }}>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</small>
              <small className="ms-3 me-3 text-muted" style={{ fontWeight: 'lighter' }} >|</small>
              <small className="text-muted" style={{ fontWeight: 'lighter' }}>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</small>
            </div>
            <div className="col-md-7"></div>
          </div>
          <br />

          <div className="mt-4 mb-4">
            <InfoBadgesProduct />
          </div>
          <div className="row  d-flex justify-content-between">
           


          <div className="col mb-3">
            <h5 className="mb-4">با دیجی‌کالا</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">اتاق خبر دیجی‌کالا</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">فروش در دیجی‌کالا</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">فرصت‌های شغلی</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">گزارش تخلف در دیجی‌کالا</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">تماس با دیجی‌کالا</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">درباره دیجی‌کالا</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="mb-4">خدمات مشتریان</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">پاسخ به پرسش‌های متداول</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">رویه‌های بازگرداندن کالا</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">شرایط استفاده</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">حریم خصوصی</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">گزارش باگ</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="mb-4">راهنمای خرید از دیجی‌کالا</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">نحوه ثبت سفارش</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">رویه ارسال سفارش</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">شیوه‌های پرداخت</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col  mb-3">
            <form>
              <h5 className="mb-4">همراه ما باشید!</h5>
              <ul className="nav flex-row">
                <li className="nav-item ms-4 social-link" ><a href="#" className="nav-link p-0 text-muted"><i className="pi pi-instagram"></i></a></li>
                <li className="nav-item ms-4 social-link" ><a href="#" className="nav-link p-0 text-muted"><i className="pi pi-twitter"></i>  </a></li>
                <li className="nav-item ms-4 social-link" ><a href="#" className="nav-link p-0 text-muted"><i className="pi pi-linkedin"></i> </a></li>
                <li className="nav-item ms-4 social-link" ><a href="#" className="nav-link p-0 text-muted"><i className="pi pi-youtube"></i></a></li>
              </ul>
              <p>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>

              <div className="d-flex flex-column  gap-2">
                <label className="visually-hidden">ایمیل شما</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="ایمیل شما" />
                <button className="btn btn-primary" type="button">ثبت نام</button>
              </div>
            </form>
          </div>
        </div>

        <div style={{textAlign:'center'}}  className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <small className="text-muted">برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</small>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}