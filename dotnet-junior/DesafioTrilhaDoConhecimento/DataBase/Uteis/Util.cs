using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace DesafioTrilhaDoConhecimento
{
    public static class Util
    {
        public static byte[] SetImageGetByteArray(Image image)
        {
            var memory = new MemoryStream();

            image.Save(memory, ImageFormat.Bmp);

            var foto = memory.ToArray();

            return foto;
        }

        public static Image SetByteArrayGetImage(byte[] byteArray)
        {
            if (byteArray == null)
                return null;
            
            var memory = new MemoryStream(byteArray);

            return Image.FromStream(memory);
        }

        public static Bitmap SetStringGetImage(string inputString)
        {
            if (inputString == null)
                return null;

            byte[] imageBytes = Encoding.Unicode.GetBytes(inputString);
            using (MemoryStream ms = new MemoryStream(imageBytes))
            {
                return new Bitmap(ms);
            }
        }

        public static string HashValue(string value)
        {
            UnicodeEncoding encoding = new UnicodeEncoding();
            byte[] hashBytes;
            using (HashAlgorithm hash = SHA1.Create())
                hashBytes = hash.ComputeHash(encoding.GetBytes(value));

            StringBuilder hashValue = new StringBuilder(hashBytes.Length * 2);
            foreach (byte b in hashBytes)
            {
                hashValue.AppendFormat(CultureInfo.InvariantCulture, "{0:X2}", b);
            }

            return hashValue.ToString();
        }
    }
}
