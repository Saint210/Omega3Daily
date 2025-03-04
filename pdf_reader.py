import pdfplumber
import os

def read_pdf_file(pdf_path):
    """Read text content from a PDF file."""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            text = ""
            for page in pdf.pages:
                text += page.extract_text() or ""
            return text
    except Exception as e:
        return f"Error reading {os.path.basename(pdf_path)}: {str(e)}"

def read_all_pdfs_in_directory(directory):
    """Read all PDFs in the specified directory."""
    pdf_contents = {}
    
    # Get all PDF files in the directory
    pdf_files = [f for f in os.listdir(directory) if f.lower().endswith('.pdf')]
    
    if not pdf_files:
        return "No PDF files found in the specified directory."
    
    # Process each PDF file
    for pdf_file in pdf_files:
        file_path = os.path.join(directory, pdf_file)
        print(f"Reading {pdf_file}...")
        content = read_pdf_file(file_path)
        pdf_contents[pdf_file] = content
    
    return pdf_contents

if __name__ == "__main__":
    # Directory containing PDF files
    pdf_directory = r"C:\Users\Robert\CascadeProjects\Omega3Daily\PDF's"
    
    # Read all PDFs
    results = read_all_pdfs_in_directory(pdf_directory)
    
    # Print results
    if isinstance(results, str):
        print(results)  # Print error message if no PDFs found
    else:
        for filename, content in results.items():
            print(f"\n{'='*50}")
            print(f"Content from {filename}:")
            print(f"{'='*50}")
            print(content)
            print(f"{'='*50}\n")
