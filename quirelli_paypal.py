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
url = "https://quirelli.c2yi-servicios1-s1-public.model-t.cc.commerce.ondemand.com/"
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
    menu = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , '.hamburger-box'))))
    menu.click()
    Pnew = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , '.NavigationBar > app-custom-navigation > .flyout > :nth-child(1) > cx-generic-link > a'))))
    Pnew.click()
    selecionarZapato = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR, ':nth-child(1) > .cx-product-image-container > .cx-product-image > img'))))
    selecionarZapato.click()
    buy = WebDriverWait(driver ,10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , '.ng-untouched > .btn'))))
    buy.click()
    time.sleep(5)
    buy2 = WebDriverWait(driver, 10).until(EC.element_to_be_clickable(((By.CSS_SELECTOR , '.btn:nth-child(2)'))))
    buy2.click()
    time.sleep(10)
    comprar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH , '//button[normalize-space()="Comprar"]')))
    comprar.click()
    time.sleep(10)
    input_field = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.NAME, 'form.ng-untouched > :nth-child(1)'))))
    input_field.click()
    input_field.clear()
    input_field.send_keys("jaime")
    time.sleep(10)
    password = WebDriverWait(driver , 10).until(EC.element_to_be_clickable(((By.XPATH , '//input[@type="password"]'))))
    password.send_keys('Lookkg361@')

