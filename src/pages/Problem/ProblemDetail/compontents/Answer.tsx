import React from "react";
import { MdPreview} from "md-editor-rt";
import {useEmotionCss} from "@ant-design/use-emotion-css";

type AnsProps = {
  answer: string;
}

const Answer: React.FC<AnsProps> = ({answer})=>{
    const catalog = useEmotionCss(()=>{
        return {
            padding: '0 20px',
            maxHeight: 'calc(100vh - 132px)',
            overflow: 'auto',
            '.title': {
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
            },
        }
    });

  return (<div className={catalog}>
    <MdPreview  modelValue={answer} editorId='answer'/>
  </div>)
}

export default Answer
