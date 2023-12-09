import React from 'react'
import a from "../assets/target.png"
import { FaYoutube } from 'react-icons/fa'
import { useState } from 'react'
const FirstBanner = () => {
 const videoUrl =
   'https://www.youtube.com/embed/nwmrVx9PpWo?si=q1qICOAQHJhDN0_R'
 const [videoSrc, setVideoSrc] = useState('')

 const handleIconClick = () => {
   if (videoSrc) {
     setVideoSrc('')
   } else {
     setVideoSrc(videoUrl)
   }
 }
  return (
    <div className='first-banner'>
      <div className='first-banner-container section-center'>
        <article className='first-banner-icons'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='250'
            height='250'
            viewBox='0 0 250 250'
            fill='none'
          >
            <path
              d='M125 50C144.891 50 163.968 57.9018 178.033 71.967C192.098 86.0322 200 105.109 200 125C200 144.891 192.098 163.968 178.033 178.033C163.968 192.098 144.891 200 125 200V198.279C144.435 198.279 163.074 190.559 176.816 176.816C190.559 163.074 198.279 144.435 198.279 125C198.279 105.565 190.559 86.9263 176.816 73.1838C163.074 59.4412 144.435 51.7208 125 51.7208V50Z'
              fill='#9A3412'
              fill-opacity='0.5'
            />
            <path
              d='M125 100C128.283 100 131.534 100.647 134.567 101.903C137.6 103.159 140.356 105.001 142.678 107.322C144.999 109.644 146.841 112.4 148.097 115.433C149.353 118.466 150 121.717 150 125C150 128.283 149.353 131.534 148.097 134.567C146.841 137.6 144.999 140.356 142.678 142.678C140.356 144.999 137.6 146.841 134.567 148.097C131.534 149.353 128.283 150 125 150V149.426C128.208 149.426 131.384 148.795 134.348 147.567C137.311 146.34 140.004 144.54 142.272 142.272C144.54 140.004 146.34 137.311 147.567 134.348C148.795 131.384 149.426 128.208 149.426 125C149.426 121.792 148.795 118.616 147.567 115.652C146.34 112.689 144.54 109.996 142.272 107.728C140.004 105.46 137.311 103.66 134.348 102.433C131.384 101.205 128.208 100.574 125 100.574V100Z'
              fill='#9A3412'
              fill-opacity='0.5'
            />
            <path
              d='M125 175C111.739 175 99.0215 169.732 89.6447 160.355C80.2678 150.979 75 138.261 75 125C75 111.739 80.2678 99.0215 89.6447 89.6447C99.0215 80.2678 111.739 75 125 75V76.1472C112.043 76.1472 99.6175 81.2942 90.4558 90.4558C81.2942 99.6175 76.1472 112.043 76.1472 125C76.1472 137.957 81.2942 150.382 90.4558 159.544C99.6175 168.706 112.043 173.853 125 173.853V175Z'
              fill='#9A3412'
              fill-opacity='0.5'
            />
            <path
              d='M138 124.5C138 131.404 132.404 137 125.5 137C118.596 137 113 131.404 113 124.5C113 117.596 118.596 112 125.5 112C132.404 112 138 117.596 138 124.5ZM120.922 124.5C120.922 127.028 122.972 129.078 125.5 129.078C128.028 129.078 130.078 127.028 130.078 124.5C130.078 121.972 128.028 119.922 125.5 119.922C122.972 119.922 120.922 121.972 120.922 124.5Z'
              fill='#9A3412'
              fill-opacity='0.5'
            />
            <path
              d='M125 0C158.152 3.95334e-07 189.946 13.1696 213.388 36.6116C236.83 60.0537 250 91.8479 250 125C250 158.152 236.83 189.946 213.388 213.388C189.946 236.83 158.152 250 125 250V247.132C157.391 247.132 188.456 234.265 211.36 211.36C234.265 188.456 247.132 157.391 247.132 125C247.132 92.6086 234.265 61.5438 211.36 38.6396C188.456 15.7354 157.391 2.86796 125 2.86796V0Z'
              fill='#9A3412'
              fill-opacity='0.5'
            />
            <path
              d='M125 225C98.4783 225 73.043 214.464 54.2893 195.711C35.5357 176.957 25 151.522 25 125C25 98.4783 35.5357 73.043 54.2893 54.2893C73.043 35.5357 98.4784 25 125 25V27.2944C99.0869 27.2944 74.235 37.5883 55.9117 55.9117C37.5883 74.235 27.2944 99.0869 27.2944 125C27.2944 150.913 37.5883 175.765 55.9117 194.088C74.235 212.412 99.0869 222.706 125 222.706V225Z'
              fill='#9A3412'
              fill-opacity='0.5'
            />
          </svg>
        </article>
        <div className='fist-banner-icon'>
          <article>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              viewBox='0 0 50 50'
              fill='none'
            >
              <path
                d='M43.7992 28.6816V23.3181C43.7992 17.6053 41.3236 12.4957 37.3883 8.94115L37.9278 8.33814C38.2451 7.98904 38.2134 7.48124 37.8643 7.19561C34.2145 4.18059 29.5492 2.33984 24.4712 2.33984C19.2665 2.33984 14.5058 4.24406 10.8244 7.38603C10.4752 7.7034 10.4435 8.24292 10.7926 8.5603L11.3639 9.09983C7.55543 12.6226 5.14342 17.7006 5.14342 23.2862V28.7133C3.20747 29.8559 1.90625 31.9821 1.90625 34.426V38.2027C1.90625 41.8525 4.88953 44.8356 8.53928 44.8356V45.3118C8.53928 46.8669 9.80877 48.168 11.3956 48.168C12.9507 48.168 14.252 46.8986 14.252 45.3118V27.3169C14.252 25.7618 12.9825 24.4606 11.3956 24.4606C9.84051 24.4606 8.53928 25.73 8.53928 27.3169V27.7929C8.2854 27.7929 8.06323 27.7929 7.84107 27.8246V23.2862C7.84107 18.3988 9.93571 14.0191 13.2998 10.9723L13.9663 11.607C14.252 11.8927 14.728 11.8927 15.0454 11.6388C17.616 9.51241 20.9167 8.27466 24.5348 8.27466C28.0893 8.27466 31.3583 9.51241 33.9288 11.607C34.2462 11.8609 34.7224 11.8292 35.0079 11.5436L35.611 10.9088C39.0068 13.9556 41.165 18.3988 41.165 23.3181V27.8565C40.9745 27.8246 40.7841 27.8246 40.5937 27.8246V27.3486C40.5937 25.7935 39.3242 24.4923 37.7374 24.4923C36.1822 24.4923 34.881 25.7618 34.881 27.3486V45.3435C34.881 46.8986 36.1504 48.1998 37.7374 48.1998C39.2925 48.1998 40.5937 46.9303 40.5937 45.3435V44.8675C44.2435 44.8675 47.2268 41.8842 47.2268 38.2344V34.4577C47.195 31.9821 45.8303 29.8241 43.7992 28.6816Z'
                fill='white'
              />
              <path
                d='M42.4653 35.0927C41.7353 35.0927 41.1324 34.4896 41.1324 33.7597V23.35C41.1324 14.1779 33.6741 6.68801 24.4705 6.68801C15.2984 6.68801 7.80848 14.1462 7.80848 23.35V33.7597C7.80848 34.4896 7.20547 35.0927 6.47553 35.0927C5.74557 35.0927 5.14258 34.4896 5.14258 33.7597V23.35C5.14258 12.6863 13.8068 4.02209 24.4705 4.02209C35.1341 4.02209 43.7983 12.6863 43.7983 23.35V33.7597C43.7983 34.4896 43.2269 35.0927 42.4653 35.0927Z'
                fill='#D9D2CB'
              />
              <path
                d='M43.7983 28.6818V33.7597C43.7983 34.4896 43.1952 35.0927 42.4653 35.0927C41.7353 35.0927 41.1324 34.4896 41.1324 33.7597V23.35C41.1324 14.1779 33.6741 6.68801 24.4705 6.68801C15.2984 6.68801 7.80848 14.1462 7.80848 23.35V33.7597C7.80848 34.4896 7.20547 35.0927 6.47553 35.0927C5.74557 35.0927 5.14258 34.4896 5.14258 33.7597V23.35C5.14258 12.6863 13.8068 4.02209 24.4705 4.02209C35.1341 4.02209 43.7983 12.6863 43.7983 23.35V25.0003'
                stroke='#56452E'
                stroke-width='0.961176'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M8.85693 26.0474C9.33298 25.1588 10.2851 24.524 11.3641 24.524C12.9193 24.524 14.2205 25.7935 14.2205 27.3803V45.3752C14.2205 46.9303 12.951 48.2316 11.3641 48.2316C9.80904 48.2316 8.50781 46.9621 8.50781 45.3752V27.8882'
                stroke='#56452E'
                stroke-width='0.961176'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M5.96858 44.3594C3.58831 43.344 1.90625 40.9955 1.90625 38.2342V34.4575C1.90625 30.8079 4.88953 27.8246 8.53928 27.8246V44.8673'
                fill='#B26047'
              />
              <path
                d='M5.96858 44.3594C3.58831 43.344 1.90625 40.9955 1.90625 38.2342V34.4575C1.90625 30.8079 4.88953 27.8246 8.53928 27.8246V44.8673'
                stroke='#56452E'
                stroke-width='0.961176'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M34.8809 31.4426V39.3769'
                stroke='#56452E'
                stroke-width='0.961176'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M34.8828 42.0109V45.3433C34.8828 46.8984 36.1522 48.1995 37.7391 48.1995C39.2943 48.1995 40.5955 46.9301 40.5955 45.3433V27.3483C40.5955 25.7932 39.326 24.4919 37.7391 24.4919C36.184 24.4919 34.8828 25.7615 34.8828 27.3483V29.1257'
                stroke='#56452E'
                stroke-width='0.961176'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M40.5625 44.8673C44.2122 44.8673 47.1954 41.884 47.1954 38.2342V34.4575C47.1954 30.8079 44.2122 27.8246 40.5625 27.8246V44.8673Z'
                fill='#B26047'
                stroke='#56452E'
                stroke-width='0.961176'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M38.1487 7.98914C38.1169 8.1161 38.0535 8.27478 37.9583 8.37L34.975 11.5437C34.8481 11.7024 34.6576 11.7658 34.4673 11.7976C34.2768 11.8293 34.0546 11.7658 33.8642 11.6072C32.9439 10.8772 31.96 10.2425 30.8809 9.73469C28.945 8.81431 26.7551 8.30652 24.4701 8.30652C20.9156 8.30652 17.6783 9.54427 15.1076 11.6072C15.0759 11.6389 15.0442 11.6706 15.0124 11.7024C14.6951 11.9563 14.2508 11.9563 13.9334 11.6706L10.7914 8.62389C10.4423 8.30652 10.4741 7.767 10.8232 7.44962C14.5046 4.30766 19.2652 2.40344 24.4701 2.40344C29.5481 2.40344 34.2451 4.21245 37.8632 7.2592C38.117 7.41788 38.2121 7.70352 38.1487 7.98914Z'
                fill='white'
              />
              <path
                d='M38.1501 7.98907C38.1184 8.11601 38.0549 8.2747 37.9598 8.36991L34.9765 11.5436C34.8496 11.7023 34.6591 11.7658 34.4687 11.7975C34.3417 11.7658 34.2148 11.734 34.0879 11.6388C33.104 10.8771 32.0249 10.2424 30.8824 9.7346C28.9464 8.81424 26.7565 8.30644 24.4715 8.30644C20.917 8.30644 17.6798 9.54418 15.1091 11.6071L12.1893 8.84597C11.8719 8.56034 11.8719 8.05255 12.221 7.76691C15.7121 4.84711 20.2188 3.10156 25.1697 3.10156C29.9938 3.10156 34.437 4.78363 37.8963 7.57649C38.0232 7.70343 38.1184 7.83039 38.1501 7.98907Z'
                fill='#B26047'
              />
              <path
                d='M19.5533 2.94285C21.1401 2.562 22.7905 2.37158 24.4725 2.37158C29.5505 2.37158 34.2475 4.18059 37.8656 7.22735C38.2147 7.51298 38.2464 8.05252 37.929 8.36988L34.9458 11.5436C34.6601 11.8609 34.1841 11.8927 33.8667 11.6071C31.2959 9.54415 28.0271 8.27466 24.4725 8.27466C20.8863 8.27466 17.5856 9.54415 14.9831 11.6388C14.6658 11.8927 14.2215 11.8927 13.9041 11.6071L10.7621 8.5603C10.413 8.24294 10.4448 7.7034 10.7939 7.38603C11.6508 6.65609 12.5711 5.9896 13.555 5.3866'
                stroke='#56452E'
                stroke-width='0.961176'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M15.6172 4.33897C16.0933 4.1168 16.5693 3.92638 17.0453 3.73596'
                stroke='#56452E'
                stroke-width='0.961176'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <h3>Mémorisez et récitez le Coran à votre propre rythme</h3>
          </article>
          <article>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='49'
              height='56'
              viewBox='0 0 49 56'
              fill='none'
            >
              <g clip-path='url(#clip0_162_3176)'>
                <path
                  d='M48.0289 8.61711V8.69097C47.9181 21.8397 47.401 30.3715 44.2616 37.0935C41.1221 43.7787 35.3603 48.5802 24.871 54.268C24.797 54.305 24.7603 54.3419 24.6863 54.3419C3.44902 42.8922 1.52842 34.9514 1.34375 8.61711C1.52842 8.61711 1.75003 8.61711 1.9347 8.61711C7.88115 8.61711 17.7057 5.47768 24.6863 0.713135C31.8885 5.66235 42.1563 8.87565 48.0289 8.61711Z'
                  fill='white'
                />
                <path
                  d='M48.0286 8.6911C47.9178 21.8397 47.4007 30.3716 44.2613 37.0937C41.1218 43.7788 35.36 48.5804 24.8707 54.2682C24.8337 54.2312 24.8337 54.1943 24.8707 54.1943C6.25572 41.3043 3.1163 36.6505 2.93164 10.2793C8.80421 10.5009 18.3702 6.73357 25.6094 1.82129L26.1265 2.19063C32.8116 6.73357 42.0452 8.61723 48.0286 8.6911Z'
                  fill='#B26047'
                />
                <path
                  d='M47.9928 11.9784C47.9928 10.9073 48.0298 9.76237 48.0298 8.6174C42.1572 8.83901 31.9263 5.66265 24.6872 0.750366C23.5053 1.56292 22.2125 2.30161 20.9199 3.04031'
                  stroke='#7A6E5F'
                  stroke-width='1.06576'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M47.918 15.4499C47.918 15.0067 47.9549 14.5635 47.9549 14.1202'
                  stroke='#7A6E5F'
                  stroke-width='1.06576'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M17.6318 4.6283C11.7593 7.25064 5.44347 8.80189 1.34375 8.61721C1.52842 34.9515 3.44902 42.8925 24.6863 54.342C41.2699 45.4039 46.0713 38.6079 47.4749 23.5018'
                  stroke='#7A6E5F'
                  stroke-width='1.06576'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M44.2249 12.1999C44.2249 12.3476 44.2249 12.4954 44.2249 12.6431C44.0401 23.4649 43.3385 30.2239 40.8638 35.5055C38.3893 40.7502 33.9202 44.8869 25.1667 49.8361C25.019 49.9099 24.8342 50.0207 24.6866 50.1316C15.6376 45.0715 11.0208 40.8611 8.50929 35.5425C5.99775 30.1869 5.29599 23.3172 5.11133 12.2368C11.1686 11.4981 18.6663 8.83886 24.6496 5.25623C25.1297 5.5517 25.61 5.81024 26.0901 6.10572C27.826 7.06601 29.6728 7.95243 31.5563 8.72806C35.9146 10.464 40.3467 11.7197 44.2249 12.1999Z'
                  fill='white'
                />
                <path
                  d='M44.2256 12.6431C44.041 23.4649 43.3392 30.224 40.8646 35.5056C38.3899 40.7503 33.921 44.8868 25.1675 49.8361C20.4399 47.103 17.005 44.6283 14.4934 42.0429C12.6467 40.1224 11.2801 38.1649 10.2829 36.0227C7.77137 30.741 7.10655 23.8713 6.92188 12.9017C12.8683 12.163 20.2183 9.57759 26.1277 6.06881C26.2016 6.03188 26.2755 5.99495 26.3125 5.95801C27.9745 6.95524 29.7473 7.8786 31.5941 8.72809C34.6596 10.0947 37.8359 11.2396 40.8646 11.9783C42.0465 12.1999 43.1545 12.4585 44.2256 12.6431Z'
                  fill='#EEEEEE'
                />
                <path
                  d='M44.2244 12.6433C44.0398 23.4651 43.338 30.2242 40.8634 35.5057C38.3888 40.7503 33.9196 44.887 25.1662 49.8363C20.4387 47.1032 17.0037 44.6285 14.4922 42.0431C23.8366 40.8982 37.9456 37.6479 43.9289 12.3109C45.0739 12.5695 43.1533 12.4586 44.2244 12.6433Z'
                  fill='#D9D2CB'
                />
                <path
                  d='M6.84709 30.7782C6.81013 30.5564 6.73619 30.3717 6.69922 30.1499'
                  stroke='#7A6E5F'
                  stroke-width='1.06576'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M5.88695 25.6068C5.40679 21.9134 5.22213 17.5551 5.11133 12.1996C11.1686 11.4609 18.6663 8.80163 24.6496 5.21899C30.6331 8.80163 38.1307 11.4609 44.188 12.1996C44.0033 23.2799 43.3385 30.1498 40.79 35.5052C38.2784 40.8607 33.6616 45.0344 24.6127 50.0943C15.5638 45.0344 10.947 40.8238 8.43543 35.5052C8.21381 35.062 8.02915 34.6187 7.84447 34.1387'
                  stroke='#7A6E5F'
                  stroke-width='1.06576'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M21.7328 29.1531L22.9147 30.298L35.2878 17.9251C36.1004 17.1124 37.4301 17.1124 38.2426 17.9251C39.0551 18.7376 39.0551 20.0672 38.2426 20.8797L24.4291 34.6932C24.0229 35.0996 23.4689 35.3211 22.9517 35.3211C22.4346 35.3211 21.8806 35.1365 21.4743 34.7302L14.9739 28.4514C14.1613 27.6387 14.1244 26.3091 14.937 25.4966C15.7495 24.6839 17.0791 24.6471 17.8918 25.4597'
                  fill='white'
                />
                <path
                  d='M21.7328 29.1531L22.9147 30.298L35.2878 17.9251C36.1004 17.1124 37.4301 17.1124 38.2426 17.9251C39.0551 18.7376 39.0551 20.0672 38.2426 20.8797L24.4291 34.6932C24.0229 35.0996 23.4689 35.3211 22.9517 35.3211C22.4346 35.3211 21.8806 35.1365 21.4743 34.7302L14.9739 28.4514C14.1613 27.6387 14.1244 26.3091 14.937 25.4966C15.7495 24.6839 17.0791 24.6471 17.8918 25.4597'
                  stroke='#7A6E5F'
                  stroke-width='1.06576'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M19.5527 27.0844L20.1812 27.6758'
                  stroke='#7A6E5F'
                  stroke-width='1.06576'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_162_3176'>
                  <rect
                    width='48.3367'
                    height='54.5737'
                    fill='white'
                    transform='translate(0.330078 0.713135)'
                  />
                </clipPath>
              </defs>
            </svg>
            <h3>Parlez arabe, avec confiance !</h3>
          </article>
          <article>
            <img src={a} alt='' />
            <h3>Améliorez vos connaissances islamiques</h3>
          </article>
          <article>
            <FaYoutube className='youtube-icon' onClick={handleIconClick} />
            {videoSrc && (
              <div className='video-container-first-banner'>
                <iframe
                  width='560'
                  height='315'
                  src={videoSrc}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowfullscreen
                ></iframe>
              </div>
            )}
            <h3>Écoutez le Coran</h3>
            <p>Suratul Yusuf</p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default FirstBanner
