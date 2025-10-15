import {css} from "lit";

export const themeStyles = css`
  .flex {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }

    .flex-col {
        flex-direction: column
    }
    
    .grow-0 {
        flex-grow: 0;
    }

    .w-full {
        width: 100%;
    }

    .p-1 {
        padding: 10px;
    }

    .p-2 {
        padding: 20px;
    }

    .px-1 {
        padding: 0 10px;
    }

    .px-2 {
        padding: 0 20px;
    }

    .py-1 {
        padding: 10px 0;
    }

    .py-2 {
        padding: 20px 0;
    }

    .mt-1 {
        margin-top: 10px;
    }

    .mt-2 {
        margin-top: 20px;
    }

    .mb-1 {
        margin-bottom: 10px;
    }

    .mb-2 {
        margin-bottom: 10px;
    }
    
    .text-xs {
        font-size: 12px;
    }
    
    .text-sm {
        font-size: 14px;
    }
    
    .text-md {
        font-size: 16px;
    }
    
    .text-lg {
        font-size: 18px;
    }
    
    .text-center {
        text-align: center;
    }
    
    .text-left {
        text-align: left;
    }
    
    .text-right {
        text-align: right;
    }
    
    .justify-start {
        justify-content: start;
    }
    
    .justify-end {
        justify-content: end;
    }
    
    .justify-center {
        justify-content: center;
    }
    
    .justify-between {
        justify-content: space-between;
    }
    
    .justify-around {
        justify-content: space-around;
    }
`
