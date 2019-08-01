

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Register
 */
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		String uname=request.getParameter("uname");
		String name=request.getParameter("name");
		String email=request.getParameter("email");
		String pwd=request.getParameter("pass");
		String dob=request.getParameter("dob");
		String phno=request.getParameter("phnno");
		
		try
		{
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection conn=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","manvitha","manvi123");
			PreparedStatement ps	=conn.prepareStatement("insert into facebook values(?,?,?,?,?,?)");
					ps.setString(1, uname);
			ps.setString(2, name);
			ps.setString(3, email);
			ps.setString(4, pwd);
			ps.setString(5, dob);
			ps.setString(6, phno);
			int rs=ps.executeUpdate();
		
		if(rs>0)
		{
			RequestDispatcher rd=request.getRequestDispatcher("login.html");
			rd.forward(request, response);
			
		}
		else
		{
			
			out.println("enter valid details");
		
			RequestDispatcher rd1=request.getRequestDispatcher("Register.html");
			rd1.include(request, response);
			
		}
		
	

	
} catch(Exception e)
{
	System.out.println(e);
}
		
	}

	

}
