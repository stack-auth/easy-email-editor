import { Picture } from '@example/components/Picture';
import { IArticle } from '@example/services/article';
import React, { useCallback, useEffect } from 'react';
import {
  CopyOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import styles from './index.module.scss';
import { QrCode } from '@example/components/qrcode';
import { Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import template from '@example/store/template';
import { useDispatch } from 'react-redux';
import templateList from '@example/store/templateList';
import dom2Image from 'dom-to-image';
import mjml from 'mjml-browser';
import { transformToMjml } from '@/utils/transformToMjml';

interface CardItemProps {
  data: IArticle;
}

export function CardItem(props: CardItemProps) {
  const { data } = props;
  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
    dispatch(
      template.actions.removeById({
        id: data.article_id,
        success() {
          dispatch(templateList.actions.fetch(undefined));
        },
      })
    );
  }, [data, dispatch]);

  return (
    <div key={data.article_id} className={styles.templeteItem}>
      <Picture className={styles.previewImg} src={data.picture} />
      <div className={styles.bottom}>
        <div className={styles.title}>Title: {data.title}</div>
        <div className={styles.title}>Date {dayjs().format('YYYY-MM-DD')}</div>
      </div>
      <div className={styles.mask}>
        <div className={styles.qrcode}>
          <QrCode
            url={`${location.protocol}//${location.host}/template?id=${data.article_id}`}
            logo={'https://assets.maocanhua.cn/FuPYsNk512cqHpUPqGCLdJMflZEz'}
          />
        </div>
        <div className={styles.listBottom}>
          <div className={styles.listItem}>
            <Link to={`/editor?id=${data.article_id}`}>
              <EditOutlined />
              &nbsp;Edit
            </Link>
          </div>
          <div className={styles.listItem}>
            <CopyOutlined />
            &nbsp;Copy
          </div>
          <div className={styles.listItem}>
            <Popconfirm
              title='Are you want to delete it?'
              onConfirm={onDelete}
              okText='Ok'
              cancelText='Cancel'
            >
              <DeleteOutlined />
              &nbsp;Delete
            </Popconfirm>
          </div>
        </div>
      </div>
    </div>
  );
}
