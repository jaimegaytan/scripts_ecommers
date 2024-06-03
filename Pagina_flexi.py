import pytest
import time
import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchWindowException

logging.basicConfig(filename="test.log", level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
@pytest.fixture

def driver():
    logging.info("Iniciando prueba de ejemplo")
    # Inicializar el WebDriver
    driver = webdriver.Chrome()
    yield driver
    # Cerrar el navegador al finalizar la prueba
    

def test_google_login(driver):
    url = "https://accstorefront.c2yi-servicios1-s1-public.model-t.cc.commerce.ondemand.com/es/login"
    driver.get(url)
    wait = WebDriverWait(driver, 10)
    close = wait.until(EC.element_to_be_clickable((By.XPATH, "//div[@id='wps-overlay-close-button']")))
    close.click()
    # Aceptar cookies
    aceptar = wait.until(EC.element_to_be_clickable((By.XPATH, "//body/main[1]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[4]/button[1]")))
    aceptar.click()
    # Cancelar
    close = wait.until(EC.element_to_be_clickable((By.XPATH , "//li[@data-code='SAPYMKT_PERS']//button[@class='consent-reject btn btn-block checkoutButtonStyle-default'][normalize-space()='Cancelar']")))
    close.click()
    # Cerrar ventana emergente
   
    # Ir Login
    
    # Iniciar sesión con Google
    google_login_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//div[@id='customBtn']")))
    google_login_button.click()

    # Cambiar a la ventana de inicio de sesión de Google
    google_window = driver.window_handles[1]
    driver.switch_to.window(google_window)

    # Ingresar correo electrónico
    email_field = wait.until(EC.visibility_of_element_located((By.ID, "identifierId")))
    email_field.send_keys("jaime.gaytan@glouu.com")
    email_field.send_keys(Keys.RETURN)

    # Ingresar contraseña
    password_field = wait.until(EC.visibility_of_element_located((By.XPATH, "//input[@name='Passwd']")))
    password_field.send_keys("Sentraser1995@123")
    password_field.send_keys(Keys.RETURN)  
 
    # Continuar
    
    try:
        google_login_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//span[contains(text(),'Continuar')]")))
        google_login_button.click()
        time.sleep(40)
        
    except NoSuchWindowException:
        driver.refresh()
