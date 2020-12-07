import React, { FC } from 'react'
import { Modal, Avatar } from 'antd'
import ForEditor from 'for-editor'

import FormattedMsg from '@/components/reactIntl/FormattedMsg'
import { ArticleType } from '@/models/article'
import avatar from '@/assets/articleAvatar.svg'

import styles from './index.less'

interface PreviewModalProps {
  visible: boolean
  imageUrl: string
  formValues: ArticleType
  time: any
  curTab: string
  markdown: string
  editorState: any
  onCancel: () => void
}

const PreviewModal: FC<PreviewModalProps> = ({
  visible,
  imageUrl,
  formValues,
  time,
  curTab,
  markdown,
  editorState,
  onCancel,
}) => {
  return (
    <Modal
      centered
      style={{ minWidth: 968 }}
      title={<FormattedMsg id="Preview" />}
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <img src={imageUrl} alt="face_img" width={920} height={320} />
      <h1 className={styles.title}>{formValues.title}</h1>
      <div className={styles.desc}>
        <div>
          <Avatar size="small" className={styles.avatar} src={avatar} alt="avatar" />
          <span className={styles.author}>{formValues.author}</span>
          <span>{time}</span>
        </div>
        <div>
          111<FormattedMsg id="Comments" />&nbsp;
          123<FormattedMsg id="Likes" />&nbsp;
          333<FormattedMsg id="Collection" />&nbsp;
          123<FormattedMsg id="View" />
        </div>
      </div>
      {curTab === 'edit' ? <div dangerouslySetInnerHTML={{ __html: editorState.toHTML() }} /> : (
        <ForEditor
          preview
          value={markdown}
          height="100%"
          style={{ border: 'none', boxShadow: 'none' }}
          toolbar={{}}
        />
      )}
    </Modal>
  )
}

export default PreviewModal