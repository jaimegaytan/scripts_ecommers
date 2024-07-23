import pytest
import time
import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, NoSuchWindowException
from selenium.common.exceptions import UnexpectedAlertPresentException
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.common.action_chains import ActionChains
width = 1296
height = 688
url = "https://jsapps.c2yi-servicios1-s1-public.model-t.cc.commerce.ondemand.com/c/Caballero"
logging.basicConfig(filename="test.log", level=logging.WARNING, format='%(asctime)s - %(levelname)s - %(message)s')
@pytest.fixture(scope="function")

def driver():
    logging.info("Iniciando prueba de ejemplo")
    # Inicializar el WebDriver
    options  = webdriver.FirefoxOptions()
    driver = webdriver.Firefox(options=options)
    yield driver
    # Cerrar el navegador al finalizar la prueba
@pytest.hookimpl(tryfirst=True, hookwrapper=True)  
@pytest.mark.run(order=1)
def test_pedido(driver):
    driver.get(url)
    #Selcionar el zapato
    product_image = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, ':nth-child(1) > .product-grid-wrapper > .cx-media-wrapper > .cx-product-image-container > .cx-media-container > .cx-product-image > .ng-star-inserted')))
    #Click en el zapato
    product_image.click()
    time.sleep(5)
    #selecionar tamano del zapato
    size = WebDriverWait(driver, 10).until(EC.element_to_be_clickable(((By.XPATH , '//span[contains(.,"25")]')))).click()
    #click en boton bolsa
    time.sleep(10)
    bolsa = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.XPATH, '//form/div/button'))))
    #mover el sitio esta bajo
    driver.execute_script("window.scrollTo(0,400)")
    time.sleep(5)
    ActionChains(driver).move_to_element(bolsa).click().perform()
    time.sleep(5)
    #click en proceder el pago 
    paid = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.LINK_TEXT , 'PROCEDER AL PAGO'))))
    paid.click()
    time.sleep(10)
    #Ingresar correo 
    correo = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.XPATH , '//input[@type="email"]'))))
    correo.send_keys('jaimeqa99@gmail.com')
    time.sleep(5)
    #Ingresar contraseña
    passwd = WebDriverWait(driver , 5).until(EC.element_to_be_clickable(((By.XPATH , '//input[@type="password"]'))))
    passwd.send_keys('Lookkg361@')
    #Click  continuar
    continuar = WebDriverWait(driver, 5).until(EC.element_to_be_clickable(((By.XPATH , '//button[@type="submit"]'))))
    continuar.click()
    time.sleep(5)
    #Ingresar nombre
    name = WebDriverWait(driver, 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , ':nth-child(1) > :nth-child(1) > .ng-tns-c250-2 > .group > .ng-untouched'))))
    name.send_keys('jaime')
    #Ingresar apellido
    last_name = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , ':nth-child(2) > .ng-tns-c250-2 > .group > .ng-pristine'))))
    last_name.send_keys('gaytan')
    #C.P
    zipcode = WebDriverWait(driver, 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , '.ng-tns-c250-2.ng-dirty > :nth-child(2) > .form-group > .ng-tns-c250-2 > .group > .ng-pristine'))))
    zipcode.send_keys('20263')
    #Ingresar domicilio
    street = WebDriverWait(driver, 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , ':nth-child(5) > .ng-tns-c250-2 > .group > .ng-pristine'))))
    street.send_keys('teo 101')
    #Ingresar telefono
    phone = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , ':nth-child(6) > .ng-tns-c250-2 > .group > .ng-pristine'))))    
    phone.send_keys('4491234455')
    time.sleep(10)
    #Click en continuar
    sumbit = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , '.slider-container'))))
    sumbit.click()
    time.sleep(10)
    #Click en continuar
    metodo_envio = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR, '.slider-container'))))
    metodo_envio.click()
    #Selecionar paypal
    select_paypal = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , '.methods > :nth-child(2)'))))
    select_paypal.click()
    time.sleep(10)
    #Click en continuar
    pago = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , '.slider-container'))))
    pago.click()
    acept_term = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR  , '#termsCheck'))))
    acept_term.click() 
    iframe = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, 'iframe[id^="jsx-iframe"]')))
    driver.switch_to.frame(iframe)
    paypal_button = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, '.paypal-button.paypal-button-number-0')))
    paypal_button.click()
     # Cambiar la ventana de paypal
    paypal_window = driver.window_handles[1]
    driver.switch_to.window(paypal_window)
    time.sleep(10)
    correo_paypal = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.ID , 'email'))))
    correo_paypal.send_keys('sb-4o1zn5269979@business.example.com')
    correo_paypal.send_keys(Keys.ENTER)
    password_paypal = WebDriverWait(driver, 10).until(EC.element_to_be_clickable(((By.ID , 'password'))))
    password_paypal.send_keys("*s?d$J1F")
    # Mandar un enter
    password_paypal.send_keys(Keys.ENTER)
    # dar click al botton de enviar de paypal
    time.sleep(10)
    decline = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.ID , 'bannerDeclineButton'))))
    decline.click()
    #revisar =  WebDriverWait(driver, 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , "#payment-submit-btn"))))
    #revisar.click()