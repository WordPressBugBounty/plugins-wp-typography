<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitWPTypography
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\AutoloadWPTypography\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\AutoloadWPTypography\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitWPTypography', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\AutoloadWPTypography\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitWPTypography', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitWPTypography::getInitializer($loader));

        $loader->setClassMapAuthoritative(true);
        $loader->register(true);

        return $loader;
    }
}
