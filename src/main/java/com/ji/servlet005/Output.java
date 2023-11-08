package com.ji.servlet005;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

@WebServlet("/Output")
public class Output extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Output() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");

		// 파일이 업로드 될 서버상 폴더 절대경로 위치
		String path = request.getServletContext().getRealPath("image");
		System.out.println(path);

		// 파일 업로드 준비 - cos.jar 활용 | 허용 파일의 최대 크기(byte), 요청 파라미터 인코딩 방식, 클라이언트가 업로드한 파일명이
		// 중복될 경우 자동처리(중복 시 나중에 업로드한 파일 뒤에 숫자를 붙이는 방식)
		MultipartRequest mr = new MultipartRequest(request, path, 10 * 1024 * 1024, "UTF-8",
				new DefaultFileRenamePolicy());

		// 파라미터 읽기
		String t = mr.getParameter("title");

		// DB에 파일명만 저장 > 용량을 여유있게. (Tomcat이 한글로 된 파일명은 인식 못해서 %2ADIVG@#식으로 꺠져서 나오기 떄문에.)
		String fileName = mr.getFilesystemName("photo");

		fileName = URLEncoder.encode(fileName, "UTF-8");
		fileName = fileName.replace(" ", "+");

		String fileName2 = mr.getFilesystemName("etc");

		fileName2 = URLEncoder.encode(fileName2, "UTF-8");
		fileName2 = fileName2.replace(" ", "+");
		
		PrintWriter pw = response.getWriter();
		
		pw.print("<html>");
		pw.print("<head><meta charset='UTF-8'><title>업로드</title></head>");
		pw.print("<body>");
		pw.printf("<h1>제목 : %s</h1>",t);
		pw.printf("<h1>파일명 : %s</h1>",fileName);
		pw.printf("<img src='image/%s'>",fileName);
		pw.printf("<a href='image/%s'>다운받기</a>",fileName2);
		pw.print("</body>");
		pw.print("</html>");

	}

}
