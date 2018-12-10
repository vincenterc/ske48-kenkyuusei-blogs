import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../components/PageWrapper'

const postContent = '<h3>ほのののぶろぐ(*^^*)♪たこやきとアイス </h3><time>2017.10.03 06:12</time><div class="blogText"><div style="text-align:center;"><img src="http://img.ske48.co.jp/blog2/ken7/150697816701365.jpg" border="0"></div><br>☆…☆…☆…☆…☆…☆…☆…☆…☆<br><br><br><br><br>たくさんの人に暖かい時をとどけたい！<br><br><br>つまづいてもぶつかっても笑顔いっぱい<br>みかん大好きほののんほのの！<br><br><br>ほののこと7期研究生の<br>相川暖花です！<br><br><br><br><br>☆…☆…☆…☆…☆…☆…☆…☆…☆<br><br><br>こんばんは！<br><br><br>前回のブログ更新できず<br>ごめんなさい(??_?`?)<br><br><br>今日のブログの写真は！<br>片岡成美ちゃんと撮った写真です！<br>ブレブレ_(・ω・」?)_?<br><br><br>9月30日インテックス大阪で<br>「意外にマンゴー」の握手会<br>でしたーーー！！！！<br>久しぶりな方が多かったです(*´∇`)<br>大阪という事でケータリングで<br>たこ焼きがありましたー！！！<br>美味しかったーーー(°_°)<br>たこ焼きだいすきーーー！！<br>あと初めて「たこせん」というものを<br>食べましたーー！！！美味でした！<br>握手会はいろんな方に<br>会えるから大好きです！<br>次の握手会も楽しみです(*^〇^*)<br>愛に来てくださった方<br>ありがとうございました！<br><br><br>10月1日は研究生公演でしたー！<br>二回公演！！(・∀・)<br>二回公演久しぶりな気がしました！<br>夜公演は影アナウンスを<br>させていただきましたー！！！<br>緊張しました！<br>そしてこの日は新しい<br>ポジションの子がたくさん<br>いました！！！<br>新しいポジションを覚えることも<br>いつもやらないポジションを<br>やることも大変なことだと<br>思うので感謝です！<br>新しいポジションを<br>任せていただくことは<br>信頼されているということだと<br>思います！研究生は<br>20人いるので初日に自分がそこの<br>ポジションをやらせて頂いただけで<br>自分のポジション、<br>というのはないと思ってます！<br>もっと研究生公演をいい公演に<br>するためにみんなで頑張りたいと<br>思います！<br>二回公演楽しかったです(^O^)<br><br><br>今日は浅井裕華ちゃんと<br>アイスを食べに行ってきました！<br>アイス美味しかったー(´▽｀)<br>珍しい味も食べました！<br>また食べたいです！<br><br><br>次のブログは<br>3日後の10月5日(木)です！<br>見てくださったら嬉しいです！<br>ブログを読んでくださって<br>ありがとうございました！！<br><br><br>じゃあねー！<br>ほのの(*^^*)♪ 							</div>'

class PostPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <h3 className='title'>POST</h3>

        <div className='content'>
          <div className="post" dangerouslySetInnerHTML={{ __html: postContent }} />
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  & > .title {
    padding: 10px 15px;
    background: #f8b500;
  }

  & > .content {
    padding: 10px 30px 15px;
    background: #fff9ed;

    & > .post {
      margin-bottom: 15px;
      font-size: 16px;
      line-height: 1.5;

      & > h3 {
        color: #bc7c3c;
      }

      & > time {
        color: #8d8d8d;
        font-size: 12px;
      }

      & > .blogText {
        margin-top: 10px;
        border-top: dotted 1px #555;
        border-bottom: dotted 1px #555;
        padding: 25px 0 20px 0;

        & img {
          width: 100%;
        }
      }
    }
  }
`

export default PageWrapper(PostPage)