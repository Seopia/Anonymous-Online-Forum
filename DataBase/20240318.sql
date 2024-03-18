CREATE DATABASE IF NOT EXISTS anonymousBoard;
use anonymousBoard;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `post_code` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '제목이 없습니다.',
  `writer` varchar(255) DEFAULT '유동',
  `detail` varchar(3000) DEFAULT '내용이 없습니다.',
  `recommend` int DEFAULT '0',
  `notice` varchar(1) DEFAULT 'N',
  `write_date_time` datetime DEFAULT NULL,
  `post_password` varchar(20) DEFAULT '1234',
  PRIMARY KEY (`post_code`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'첫 게시글 쓰기 테스트','멀라','<p>이게 첫 게시글인데 과연 들어갈까?</p>\n<p></p>\n<p>첫 게시글을 수정도 한다!</p>\n<p>수정이 되네!</p>\n',0,'N','2024-03-13 18:26:54','1234'),(2,'두 번째 게시글 쓰기 테스트','멀라','<p>잘 들어가네!!</p>\n',0,'N','2024-03-13 18:28:05','1234'),(3,'세 번째 게시글 쓰기 테스트','멀라','<p>잘 들어가네!!</p>\n',0,'N','2024-03-13 18:28:55','1234'),(4,'네 번째 게시글 쓰기 테스트','멀라','<p>잘 들어가네!!</p>\n',0,'N','2024-03-13 18:30:12','1234'),(5,'다섯 번째 게시글 쓰기 테스트','멀라','<p>잘 들어가네!!</p>\n',0,'N','2024-03-13 18:30:48','1234'),(6,'여섯 번째 게시글 쓰기 테스트','멀라','<p>잘 들어가네!!</p>\n',0,'N','2024-03-13 18:32:04','1234'),(7,'여섯 번째 게시글 쓰기 테스트','멀라','<p>잘 들어가네!!</p>\n',0,'N','2024-03-13 18:38:51','1234'),(8,'일곱 번째 게시글 쓰기 테스트','멀라','<p>잘 들어가네!!</p>\n',0,'N','2024-03-13 18:39:58','1234'),(9,'왜 여섯이 두 개지?','테스트','<p>이상하네...</p>\n',0,'N','2024-03-13 18:41:39','1234'),(10,'너무 잘되니까 이상한데..?','버그','<p>ㄹㅇ 뭔가 수상하지 않음??</p>\n',0,'N','2024-03-13 18:43:02','1234'),(11,'당연히 되겠지','천재','<p>누가 <strong>나를 </strong>거역하는가</p>\n<p>나에게 <del>복종하라! </del></p>\n<p>사실 이건 그냥 HTML 태그 변환 잘되는지 <ins>테스트</ins>하는 <sub>거</sub><sup>임</sup></p>\n<p>폰트도 한번 <span style=\"font-size: 30px;\">키워보고</span></p>\n<p>글씨체도 한 번<span style=\"font-family: Georgia;\"> 바꿔보고</span></p>\n<p><span style=\"font-family: Georgia;\">li 태그도 한 번 </span></p>\n<ul>\n<li>써</li>\n<li>보</li>\n<li>고</li>\n</ul>\n',0,'N','2024-03-13 18:51:10','1234'),(12,'변환은 잘 되는 듯','천재','<p>이제 시간대 별로 정렬해서 갖고 오는 거랑,</p>\n<p>HTML태그를 출력할 수 있게 하면 될 것 같은데?</p>\n',0,'N','2024-03-13 18:52:10','1234'),(13,'페이징도 테스트 해보자','페이징','<p>무의미한&nbsp;</p>\n',0,'N','2024-03-13 18:52:35','1234'),(14,'똥글','똥','<p></p>\n',0,'N','2024-03-13 18:52:53','1234'),(15,'동글동글','똥','<p></p>\n',0,'N','2024-03-13 18:53:05','1234'),(16,'이게 2페이지잖아?','제발되라','<p></p>\n',0,'N','2024-03-13 18:53:23','1234'),(17,'글 하나 써야겠다','힘들다','<p>비밀번호도 추가해야하는데 너무&nbsp;</p>\n',0,'N','2024-03-13 20:17:36','1234'),(18,'창호 등신','이창호','<p>이창호는 머저리다&nbsp;</p>\n',0,'N','2024-03-14 00:02:08','1234'),(19,'비밀번호 추가 테스트','관리자','<p>게시글입니다.</p>\n',0,'N','2024-03-18 17:42:48','1234'),(20,'비밀번호 추가 테스트2','관리자','<p>게시글입니다.?</p>\n',0,'N','2024-03-18 17:43:42','3232'),(22,'공지사항 테스트입니다.','관리자','<p>공지사항 테스트입니다.</p>\n',0,'Y','2024-03-18 17:52:02','seopia'),(24,'기본 닉네임 테스트','유동','<p>테스트</p>\n',0,'N','2024-03-18 17:58:51','azx123'),(25,'기본 닉네임 테스트','유동','<p></p>\n',0,'N','2024-03-18 18:00:29','qwqw13245'),(27,'as','유동','<p>asd\'</p>\n<p>dd  sa&nbsp;</p>\n',0,'N','2024-03-18 19:45:18','1234'),(28,'당연히 되겠지','천재','<p>누가 <strong>나를 </strong>거역하는가?</p>\n<p>나에게 <del>복종하라! </del></p>\n<p>사실 이건 그냥 HTML 태그 변환 잘되는지 <ins>테스트</ins>하는 <sub>거</sub><sup>임</sup></p>\n<p>폰트도 한번 <span style=\"font-size: 30px;\">키워보고</span></p>\n<p>글씨체도 한 번<span style=\"font-family: Georgia;\"> 바꿔보고</span></p>\n<p><span style=\"font-family: Georgia;\">li 태그도 한 번 </span></p>\n<ul>\n<li>써</li>\n<li>보</li>\n<li>고</li>\n</ul>\n',0,'N','2024-03-18 19:56:40','1234'),(29,'당연히 되겠지','천재','<p>누가 <strong>나를 </strong>거역하는가?</p>\n<p>나에게 <del>복종하라! 크하하</del></p>\n<p>사실 이건 그냥 HTML 태그 변환 잘되는지 <ins>테스트</ins>하는 <sub>거</sub><sup>임</sup></p>\n<p>폰트도 한번 <span style=\"font-size: 30px;\">키워보고</span></p>\n<p>글씨체도 한 번<span style=\"font-family: Georgia;\"> 바꿔보고</span></p>\n<p><span style=\"font-family: Georgia;\">li 태그도 한 번 </span></p>\n<ul>\n<li>써</li>\n<li>보</li>\n<li>고</li>\n</ul>\n',0,'N','2024-03-18 19:59:37','1234');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-18 20:20:23
