<template>
    <header class="d-flex justify-content-between px-3.5 sm:px-5 py-2 border-bottom border-warning-30 align-items-center fixed-top bg-white-50">

        <span id="logo-header">
          <a href="/#/" class="d-flex gap-2 align-items-center no-underline">
            <span id="logo-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26 26" fill="none">
                <path d="M24.6666 10.8712L13.283 22.5614C11.9703 23.9094 10.1898 24.6667 8.33328 24.6667C6.47676 24.6667 4.69627 23.9094 3.38351 22.5614C2.07075 21.2134 1.33325 19.3851 1.33325 17.4788C1.33325 15.5724 2.07075 13.7441 3.38351 12.3961L12.7334 2.79629C13.1639 2.33862 13.6788 1.97356 14.2482 1.72242C14.8175 1.47128 15.4299 1.33908 16.0495 1.33355C16.6692 1.32803 17.2837 1.44927 17.8572 1.69021C18.4307 1.93115 18.9518 2.28697 19.3899 2.7369C19.8281 3.18683 20.1746 3.72185 20.4092 4.31076C20.6439 4.89968 20.762 5.53067 20.7566 6.16694C20.7512 6.80321 20.6225 7.43201 20.3779 8.01664C20.1333 8.60128 19.7778 9.13004 19.3321 9.57208L9.9832 19.1772C9.5432 19.6138 8.95383 19.8554 8.34204 19.85C7.73025 19.8446 7.14498 19.5927 6.7123 19.1486C6.27961 18.7044 6.03412 18.1035 6.02871 17.4753C6.0233 16.8471 6.25839 16.2418 6.68336 15.7899L16.0333 6.18579" stroke="#9E402C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>  </svg>
            </span>
            <h3 class="text-primary">Penpal</h3>
          </a>
        </span>

        <span class="d-flex gap-4">
            <p class="m-0 d-flex align-self-middle">
                <a class="text-decoration-underline text-dark">en</a> / <a class="text-black-50 text-decoration-none">ro</a>
            </p>
            <a href="/#/login" class="d-flex align-middle gap-2 no-underline">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M8.92999 8.5C8.92999 9.36195 9.2724 10.1886 9.8819 10.7981C10.4914 11.4076 11.318 11.75 12.18 11.75C13.0419 11.75 13.8686 11.4076 14.4781 10.7981C15.0876 10.1886 15.43 9.36195 15.43 8.5C15.43 7.63805 15.0876 6.8114 14.4781 6.2019C13.8686 5.59241 13.0419 5.25 12.18 5.25C11.318 5.25 10.4914 5.59241 9.8819 6.2019C9.2724 6.8114 8.92999 7.63805 8.92999 8.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.236 16.75C16.8625 15.7239 16.1824 14.8376 15.2879 14.2114C14.3934 13.5851 13.3279 13.2491 12.236 13.2491C11.1441 13.2491 10.0786 13.5851 9.18415 14.2114C8.28968 14.8376 7.60954 15.7239 7.23602 16.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12.0945" cy="11.5" r="9.75" stroke="black" stroke-width="1.5"/></svg>
                </span>
                <p class="text-black-50 m-0 hidden sm:block">my account</p>
              </a>
            <a href="/#/cart">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 19.1249H15.921C16.2753 19.125 16.6182 18.9996 16.889 18.7709C17.1597 18.5423 17.3407 18.2253 17.4 17.8759L20.037 2.37593C20.0965 2.02678 20.2776 1.70994 20.5483 1.48153C20.819 1.25311 21.1618 1.12785 21.516 1.12793H22.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7.875 22.125C7.66789 22.125 7.5 21.9571 7.5 21.75C7.5 21.5429 7.66789 21.375 7.875 21.375" stroke="black" stroke-width="1.5"/> <path d="M7.875 22.125C8.08211 22.125 8.25 21.9571 8.25 21.75C8.25 21.5429 8.08211 21.375 7.875 21.375" stroke="black" stroke-width="1.5"/> <path d="M15.375 22.125C15.1679 22.125 15 21.9571 15 21.75C15 21.5429 15.1679 21.375 15.375 21.375" stroke="black" stroke-width="1.5"/> <path d="M15.375 22.125C15.5821 22.125 15.75 21.9571 15.75 21.75C15.75 21.5429 15.5821 21.375 15.375 21.375" stroke="black" stroke-width="1.5"/> <path d="M17.9529 14.6251H5.88193C5.21301 14.625 4.5633 14.4014 4.03605 13.9897C3.5088 13.5781 3.13425 13.002 2.97193 12.3531L1.52193 6.55309C1.49426 6.44248 1.49218 6.32702 1.51583 6.21548C1.53949 6.10394 1.58827 5.99927 1.65846 5.90941C1.72864 5.81955 1.81839 5.74688 1.92089 5.69692C2.02338 5.64696 2.13591 5.62103 2.24993 5.62109H19.4839" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6 8.625V10.875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M10.5 8.625V10.875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 8.625V10.875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
            </span>
            </a>
        </span>

    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
  .bg-primary-30{
    background-color: rgba(158, 64, 44, 0.25)
  }
  .bg-warning-30{
    background-color: rgba(228, 200, 156, 0.25);
  }
  .custom-list{
    list-style: none;
  }
  .bg-white-50{
    background-color: rgba(255, 255, 255, 0.95);
  }

  .custom-list li::before {
    content: url('your-custom-icon.svg'); /* Replace default bullet with custom SVG */
    margin-right: 8px; /* Adjust spacing between the icon and the list item */
  }
</style>