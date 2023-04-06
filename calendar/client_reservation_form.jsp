<%@ page language="java" contentType="text/html; charset=UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <title>고객 예약 페이지</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="" name="keywords">
        <meta content="" name="description">

        <!-- Header Start -->
        <%@ include file="../../gardener/inc/header_link.jsp" %>
            <!-- Header End -->

            <style>
                
                <style>@import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');

                #form2 {
                    background-color: white;
                    height: auto;
                    width: 290px;
                    margin: 0px;
                    margin: 0 auto;
                    border-radius: 5px;
                    box-shadow: 0px 40px 30px -20px rgba(0, 0, 0, 0.3);
                }

                td {
                    width: 50px;
                    height: 50px;
                }

                .Calendar {
                    text-align: center;
                }

                .Calendar>thead>tr:first-child>td {
                    font-family: 'Questrial', sans-serif;
                    font-size: 1.1em;
                    font-weight: bold;
                }

                .Calendar>thead>tr:last-child>td {
                    font-family: 'Questrial', sans-serif;
                    font-weight: 600;
                }

                .Calendar>tbody>tr>td>p {
                    font-family: 'Montserrat', sans-serif;
                    height: 45px;
                    width: 45px;
                    border-radius: 45px;
                    transition-duration: .2s;
                    line-height: 45px;
                    margin: 2.5px;
                    display: block;
                    text-align: center;
                }

                .pastDay {
                    color: lightgray;
                }

                .futureDay,
                .today {
                    background-color: #FFFFFF;
                    cursor: pointer;
                }

                .futureDay:hover {
                    background: #eee;
                }

                .futureDay.choiceDay {
                    background: #1ac50d;
                    color: #fff;
                    font-weight: 600;
                    cursor: pointer;
                }
            </style>



            </style>

            <link rel="stylesheet" href="/resources/sneat/assets/vendor/fonts/boxicons.css" />


    </head>

    <body>
        <!-- Spinner Start 로딩시 빙글빙글이라 따로 안뺌-->
        <div id="spinner"
            class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
        </div>
        <!-- Spinner End -->

        <!-- Topbar Start 맨 윗칸 전화모양-->
        <%@ include file="../../gardener/inc/topbar_link.jsp" %>
            <!-- Topbar End -->

            <!-- Navbar Start 카테고리부분-->
            <%@ include file="../../gardener/inc/navbar_link.jsp" %>
                <!-- Navbar End -->

                <!-- Body -->
                <a class="skip-link sr-only" href="#skip-target">Skip to content</a>


                <!--  Sidebar Start -->
                <!--  Sidebar End-->


                <!-- Page Header Start -->
                <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="container text-center py-5">
                        <h1 class="display-3 text-white mb-4 animated slideInDown">펫시터 > 예약하기</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol class="breadcrumb justify-content-center mb-0">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">마이페이지</a></li>
                                <li class="breadcrumb-item active" aria-current="page">예약하기</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <!-- Page Header End -->


                <!-- Quote Start -->
                <div class="container-fluid py-5">
                    <div class="container">
                        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                            <p class="fs-5 fw-bold text-primary">펫시터 > 예약하기</p>
                            <h1 class="display-5 mb-5">예약 정보 확인</h1>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-11">
                                <div class="bg-light rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="row g-3">



                                        <div class="col-sm-7">
                                            <div class="form-floating">



                                                <div class="container-xxl py-5">
                                                    <div class="row g-5 align-items-start">
                                                        <div class="col-lg-12 col-md-7 wow fadeInUp"
                                                            data-wow-delay="0.3s"
                                                            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                            <div class="align-self-center wow fadeInUp"
                                                                data-wow-delay="0.1s"
                                                                style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                                                                <img class="img-fluid rounded" data-wow-delay="0.1s"
                                                                    src="/resources/gardener/img/carousel-1.jpg">
                                                            </div>
                                                            <p class="text-primary mb-4"></p>
                                                            <h3 class="mb-4">나와 우리 아이에게 맞는 올바른 교육을 받아보세요</h3>
                                                            <p>조승현 훈련사 <a class="nav-link active" href=""
                                                                    style="display: inline;">★5.0 121개의 리뷰</a></p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <hr>
                                                <div class="row mb-5">
                                                    <h5 class="text-primary m-4">경력</h5>

                                                    <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s"
                                                        style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                                                        <div class="row g-5">
                                                            <div
                                                                class="col-2 border-start ps-4 align-self-center text-center">
                                                                <i class="bx bx-trophy bx-md"></i>

                                                            </div>
                                                            <div class="col-10">
                                                                <h4 class="mb-3">대표 경력</h4>
                                                                <span>반려동물 훈련-관리사 교육 강사, 반려견 교육 센터 근무</span>
                                                            </div>
                                                            <div
                                                                class="col-2 border-start ps-4 align-self-center text-center">
                                                                <i class="bx bx-trophy bx-md"></i>

                                                            </div>
                                                            <div class="col-10">
                                                                <h4 class="mb-3">전문 분야</h4>
                                                                <span>행동 분석 전문, 산책 교육 전문</span>
                                                            </div>
                                                            <div
                                                                class="col-2 border-start ps-4 align-self-center text-center">
                                                                <i class="bx bx-trophy bx-md"></i>

                                                            </div>
                                                            <div class="col-10">
                                                                <h4 class="mb-3">방문 지역</h4>
                                                                <span>서울특별시, 인천광역시, 경기도 전지역 (그 외 지역은 출장비 발생)</span>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                                <hr>
                                                <div class="row mb-5">
                                                    <h5 class="text-primary m-4">자격</h5>

                                                    <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s"
                                                        style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                                                        <div class="row g-5">
                                                            <div class="col-12 col-sm-6 col-lg-12">
                                                                <div class="border-start ps-4">
                                                                    <i class="fa fa-award fa-3x text-primary mb-3"></i>
                                                                    <h4 class="mb-3">반려동물관리사</h4>
                                                                    <span>(주)한국반려동물관리협회</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-6 col-lg-12">
                                                                <div class="border-start ps-4">
                                                                    <i class="fa fa-award fa-3x text-primary mb-3"></i>
                                                                    <h4 class="mb-3">KKF 인증 3등 훈련사</h4>
                                                                    <span>한국애견연맹(KKF)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="row g-3 m-3">
                                                    <hr>
                                                    <div class="col">
                                                        <div class="text-center border m-3"
                                                            style="height: 200px; background-color: white;">펫시터 자기소개
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-sm-5">

                                            <div class="row g-3 m-3">

                                                <div class="align-self-center wow fadeInUp" data-wow-delay="0.1s"
                                                    style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                                                    <div class="card text-center m-3">
                                                        <div class="card-body">
                                                            <h6 class="card-title text-start">궁금한 내용이 있다면, 문의를 보내보세요!
                                                            </h6>
                                                            <a href="javascript:void(0)"
                                                                class="btn btn-primary py-3 px-4">문의하기</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div class="text-center border m-3"
                                                        style="height: 200px; background-color: white;">이용요금 안내</div>
                                                    <div class="text-center border m-3"
                                                        style="height: 400px; background-color: white;">달력& 예약폼 나올곳
                                                    </div>
                                                    <div class="text-center border m-3"
                                                        style="height: 200px; background-color: white;">그외 안내사항</div>
                                                </div>
                                            </div>
                                            <form id="form1">

                                                <div class="row g-3 m-3">

                                                    <div class="col-sm-6">
                                                        <div class="form-floating">
                                                            <select class="form-control  border-0 bg-white"
                                                                name="pettype" id="pettype">
                                                                <option>펫의 종류를 알려주세요</option>
                                                                <option value="10000">고양이</option>
                                                                <option value="20000">소형견</option>
                                                                <option value="25000">중형견</option>
                                                                <option value="50000">대형견</option>
                                                            </select>
                                                            <label for="gname">펫 종류</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-floating">
                                                            <select class="form-control  border-0 bg-white"
                                                                name="petcount" id="petcount">
                                                                <option>펫의 수를 알려주세요</option>
                                                                <option value="1">1마리</option>
                                                                <option value="2">2마리</option>
                                                                <option value="3">3마리</option>
                                                            </select>
                                                            <label for="gname">펫 수</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-floating">
                                                            <input type="text" class="form-control border-0" name="date"
                                                                id="date" placeholder="Gurdian Name">
                                                            <label for="gname">선택한 예약일</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-floating">
                                                            <button class="btn btn-primary py-3 px-4 mt-3" type="button"
                                                                id="bt_money">금액 계산</button>


                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-floating">
                                                            <input type="text" class="form-control border-0"
                                                                name="money" id="money" readonly="" value=""
                                                                placeholder="Gurdian Name">
                                                            <label for="gname">금액</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-floating">
                                                            <textarea class="form-control border-0"
                                                                placeholder="Leave a message here" name="message"
                                                                style="height: 100px"></textarea>
                                                            <label for="message">요청사항</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 text-center">
                                                        <button class="btn btn-primary py-3 px-4 mt-3" type="button"
                                                            id="bt_pay">결제페이지로</button>
                                                    </div>
                                                </div>
                                            </form>






                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <!-- Quote End -->






                <!-- .col-md-8 -->


                <!-- Footer Start -->
                <!-- Footer End -->

                <!-- Copyright Start -->
                <%@ include file="../../gardener/inc/copyright_link.jsp" %>
                    <!-- Copyright End -->




                    <!-- Back to Top -->
                    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
                            class="bi bi-arrow-up"></i></a>

    </body>
    <script type="text/javascript">



        function goPay() {
            $("#form1").attr({
                action: "/pay",
                method: "post"
            });
            $("#form1").submit();
        }

        $(function () {
            $("#bt_pay").click(function () {
                goPay();
            });

            $("#bt_money").click(function () {
                let a = $("#pettype :selected").val();
                let b = $("#petcount :selected").val();
                let c = $("#date").val();
                let d = a * b * c;
                $("#money").attr("value", d);
            });
        });

    </script>

    </html>